import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Navbar } from 'react-bootstrap'
import SignIn from '../../components/Sign In/SignIn'
import NavbarLinks from '../../components/Navbar Links/NavbarAddendum'


const Login = () => {
    return (
        <div>
            <Navbar />
            <NavbarLinks />
            <SignIn />
            <Footer />
        </div>
    )
}

export default Login;