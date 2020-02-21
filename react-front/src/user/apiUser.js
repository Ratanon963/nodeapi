
// Read user profile
export const read = (userId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}


// Update user profile

//Before has a upload photo
// export const update = (userId, token , user) => {
//     return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// }

// export const update = (userId, token , userData) => {
//     console.log ("USER DATA UPDATE: ", userData);
//     return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: userData
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// }

export const update = (userId, token, user) => {
    console.log("USER DATA UPDATE: ", user);
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


// Show all users in the system
export const list = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

};


// Remove user ,this is the same route with when we read
export const remove = (userId, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}


// Create for support when we have edited profile name at the menu bar has to change as well
export const updateUser = (user ,next) =>{
    if(typeof window !== 'undefined'){
        if(localStorage.getItem('jwt')){
            let auth = JSON.parse(localStorage.getItem('jwt'))

            auth.user = user
            localStorage.setItem('jwt',JSON.stringify(auth));
            next();
        }
    }
}

    ///this.state.user._id = followId
export const follow = (userId, token, followId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/user/follow`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userId, followId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

    ///this.state.user._id = followId
    export const unfollow = (userId, token,unfollowId  ) => {
        return fetch(`${process.env.REACT_APP_API_URL}/user/unfollow`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ userId, unfollowId })
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };


    export const findPeople = (userId , token) =>{
        return fetch(`${process.env.REACT_APP_API_URL}/user/findpeople/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    }; 




    