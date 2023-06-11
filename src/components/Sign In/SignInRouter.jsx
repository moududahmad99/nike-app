import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'


const SignInRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <SignIn />
                <Routes>
                    <Route path="/forgotten-password" />
                    <Route path="/registration" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default SignInRouter