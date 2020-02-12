import React, { Component } from 'react'
import { isAuthenticated } from '../auth/index'
import { Redirect, Link } from 'react-router-dom'
import { read } from "./apiUser";
import DefaultProfile from '../images/User_Avatar.png'
import DeleteUser from './DeleteUser';
import FollowProfileButton from './FollowProfileButton'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            //user: "",
            user: { following: [], followers: [] },
            redirectToSignin: false,
            following: false,
            error: ""
        };
    }

    // Check follow
    checkFollow = user => {
        const jwt = isAuthenticated()
        const match = user.followers.find(follower => {
            // one id has many other ids (followers) and vice versa
            return follower._id === jwt.user._id
        });
        return match
    }
    // Check follow
    //this function will make the post to backend
    clickFollowButton = callApi => {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;
    
        callApi(userId, token, this.state.user._id)
        .then(data => {
          if (data.error) {
            this.setState({ error: data.error });
          } else {
            this.setState({ user: data, following: !this.state.following });
          }
        });
      };

    // function check userId 
    init = userId => {
        const token = isAuthenticated().token;
        read(userId, token).then(data => {
            if (data.error) {
                this.setState({ redirectToSignin: true });
            } else {
                // Just add for Followering
                let following = this.checkFollow(data)
                this.setState({ user: data, following });
            }
        })
    };


    //function read ==> Id and get token
    read = (userId, token) => {
        // fetch ==> send request
        return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
                //isAuthenticated().token 
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };



    componentDidMount() {
        // console.log("user id from route params:", this.props.match.params.userId)
        const userId = this.props.match.params.userId;  // get user ID
        this.init(userId) //Pass to init
    };

    componentWillReceiveProps(props) {  // change when click profile

        const userId = props.match.params.userId;  // get user ID
        this.init(userId) //Pass to init
    };


    render() {
        // destuctor   <!-- this.state.user.create -->
        const { redirectToSignin, user } = this.state;
        if (redirectToSignin) return <Redirect to="/signin" />

        const photoUrl =
            user._id ? `${process.env.REACT_APP_API_URL}/user/photo/${user._id}?${new Date().getTime()}`
                : DefaultProfile;


        return (
            <div className="container">
                <h2 className="mt-5 mb-5" >Profile</h2>
                <div className="row">
                    <div className="col-md-6">


                        {/* <img className="card-img-top"
                            src={DefaultProfile}
                            alt={user.name}
                            style={{
                                width: '100%',
                                height: "15vw",
                                objectFit: "cover"
                            }}
                        /> */}

                        <img
                            style={{ height: "200px", width: "auto" }}
                            className="img-thumbnail"
                            src={photoUrl}
                            onError={i => (i.target.src = `${DefaultProfile}`)}
                            alt={user.name}
                        />


                    </div>

                    <div className="col-md-6">
                        <div className="lead mt-2">
                            <p>Hello {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>{`Jonined: ${new Date(user.create).toDateString()}`}</p>
                        </div>

                        {isAuthenticated().user &&
                            isAuthenticated().user._id === user._id ? (

                                <div className="d-inline-block">
                                    <Link className="btn btn-raised btn-success mr-5"
                                        to={`/user/edit/${user._id}`}
                                    >
                                        Edit Profile

                                    </Link>

                                    <DeleteUser userId={user._id} />

                                </div>
//  <p>{this.state.following
//     ? "following"
//     : "not following"}</p>    user for check 
                            ) : <FollowProfileButton 
                            following = {this.state.following}
                            onButtonClick = {this.clickFollowButton}
                            />
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col md-12 mt-5 md-5">
                        <hr />
                        <p className="lead">{user.about}</p>
                        <hr />
                    </div>
                </div>
            </div>


        )
    };
}
export default Profile


