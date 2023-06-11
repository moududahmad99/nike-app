import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import NavbarLinks from '../Navbar Links/NavbarAddendum'

const NavbarRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" />
                    <Route path="/cart" />
                </Routes>

                <NavbarLinks />
                <Routes>
                    <Route path="/" />
                    <Route path="/Home" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NavbarRouter