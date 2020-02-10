import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Signup from './user/Singup'
import Signin from './user/Singin'
import Profile from './user/Profile'
import Users from './user/Users'
import EditProfile from './user/EditProfile'
import PrivateRoute from './auth/PrivateRoute'


const MainRouter = () => (
    <div>
        <Menu/>
        <switch>
             
            <Route exact path="/" component = {Home} />      
            <Route exact path="/signup" component = {Signup} />
            <Route exact path="/signin" component = {Signin} />
            <Route exact path="/user/:userId" component = {Profile} />
            <PrivateRoute exact path="/users" component = {Users} />
            <PrivateRoute exact path="/user/edit/:userId" component = {EditProfile} />
        </switch>

    </div>
);


export default MainRouter;