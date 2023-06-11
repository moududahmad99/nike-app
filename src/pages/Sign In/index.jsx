import React from 'react'
import NavbarRouter from '../../components/Navbar/NavbarRouter'
import Footer from '../../components/Footer/Footer'
import SignInRouter from '../../components/Sign In/SignInRouter'


const Login = () => {
    return (
        <div>
            <NavbarRouter />
            <SignInRouter />
            <Footer />
        </div>
    )
}

export default Login;