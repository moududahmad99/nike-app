import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import './Style.css'

const NavbarLinks = () => {
    return (
        <div className='navbar-links'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 py-4">
                        <div className="nike-logo">
                            <picture>
                                <img src="./assets/navbar-middle-nike-logo.png" alt="nike-logo" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="navbar-links-inner">
                            <ul>
                                <li>
                                    <Link to='new&features'>New & Features</Link>
                                </li>
                                <li>
                                    <Link to='men-collection'>Men</Link>
                                </li>
                                <li>
                                    <Link to='women-collection'>Women</Link>
                                </li>
                                <li>
                                    <Link to='kids-collection'>Kids</Link>
                                </li>
                                <li>
                                    <Link to='sales-collection'>Sales</Link>
                                </li>
                                <li>
                                    <Link to='snkrs'>SNKRS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-end align-items-center">
                        <div className="navbar-search-bar">
                            <div className="input-icons-left">
                                <i><CiSearch /></i>
                            </div>
                            <input type="text" className="custom-input" placeholder='Search' />
                            <div className="input-icons-right">
                                <i><AiOutlineHeart /></i>
                                <i><AiOutlineShopping /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarLinks