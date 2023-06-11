import React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import './Style.css'

const SignIn = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <React.Fragment>
            <div id="signIn-wrapper">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 text-center">
                            <div className="signIn-inner">
                                <picture>
                                    <img src="./assets/navbar-middle-nike-logo.png" alt="logo" />
                                </picture>
                                <h4>YOUR ACCOUNT FOR EVERYTHING NIKE</h4>
                                <div className="signIn-inner--form">
                                    <input type="email" placeholder='Email Address' />
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className="signIn-inner-forgotPass d-flex justify-content-between">
                                    <div className="keep-me-login d-flex align-items-center">
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <p>Keep me signed</p>
                                    </div>
                                    <Link to="/forgot-password">Forgotten your password</Link>
                                </div>
                                <p className='signIn-privacyPolicy'>By logging in, you agree to Nike's <span>Privacy Policy</span> and <span>Terms of Use</span>.</p>
                                <div className='signIn-button'>
                                    <a href="##">Sign In</a>
                                </div>
                                <div className="signIn-inner--joinUs">
                                    <p>Not a Member?<Link to="/registration">Join Us</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn