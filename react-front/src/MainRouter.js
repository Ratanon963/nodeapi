import React from 'react'
import {Route , Switch} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Singup'


const MainRouter = () => (
    <div>
        <switch>
             
            <Route exact path="/" component = {Home} />      
            <Route exact path="/signup" component = {Signup} />

        </switch>

    </div>
);


export default MainRouter;