import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from '../../pages/Sign In';
import SignIn from '../../pages/Registration';

const NavbarRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/"/>
                    <Route path="/find-store" />
                    <Route path="/help" />
                    <Route path="/registration" element={<SignIn />} />
                    <Route path="/sign-in" element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NavbarRouter;