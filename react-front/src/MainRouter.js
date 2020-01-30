import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Signup from './user/Singup'
import Signin from './user/Singin'
import Profile from './user/Profile'


const MainRouter = () => (
    <div>
        <Menu/>
        <switch>
             
            <Route exact path="/" component = {Home} />      
            <Route exact path="/signup" component = {Signup} />
            <Route exact path="/signin" component = {Signin} />
            <Route exact path="/user/:userId" component = {Profile} />

        </switch>

    </div>
);


export default MainRouter;