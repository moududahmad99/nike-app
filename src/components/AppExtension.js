import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NavbarAddendum from './Navbar Links/NavbarAddendum';

export default function AppExtension() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" />
                    <Route path="/cart" />
                </Routes>

                <NavbarAddendum />
                <Routes>
                    <Route path="/" />
                    <Route path="/Home" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
