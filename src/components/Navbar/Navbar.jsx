import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const Navbar = () => {
    return (
        <div id='navbar-top'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-center">
                        <div className="navbar-top-logo">
                            <picture>
                                <img src="./assets/navbar-top-logo.png" alt="navbar-top" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <div className="skip-top-main-content">
                            <Link to='/' className='skip2main'>Skip to main Content</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 justify-content-end p-0 d-flex">
                        <div className="navbar-top-links">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/find-store">Find a Store</Link>
                                        <div className="horizontal-line" ></div>
                                    </li>
                                    <li>
                                        <Link to="/help">Help</Link>
                                        <div className="horizontal-line" ></div>

                                    </li>
                                    <li>
                                        <Link to="/registration">Join In</Link>
                                        <div className="horizontal-line" ></div>
                                    </li>
                                    <li>
                                        <Link to="/sign-in">Sign In</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;