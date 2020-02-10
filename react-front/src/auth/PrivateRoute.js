import React ,{Component}from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './index'



// Crerate for use with the certain component
const PrivateRoute = ({ component : Component, ...rest}) => (

    // props mean components passed down to this private route compoent
    <Route 
    {...rest}
        render=
        {props => isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect
                    to={{
                        pathname: "/singin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)

export default PrivateRoute








