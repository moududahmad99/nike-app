import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarLinks from '../Navbar Links/NavbarAddendum'

const NavbarLinksRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <NavbarLinks />
                <Routes>
                    <Route path="/" />
                    <Route path="/new-features"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NavbarLinksRouter