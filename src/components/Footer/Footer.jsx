import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi'
import { ImInstagram } from 'react-icons/im'
import { FiMapPin } from 'react-icons/fi'
import './Style.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div id="footer-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-lg-2">
                            <div className="footer-inner">
                                <h5>Find a Store</h5>
                                <h5>Become a Member</h5>
                                <h5>Sign up for Email</h5>
                                <h5>Send us Feedback</h5>
                                <h5>Students Discount</h5>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-inner">
                                <h5>Get Help</h5>
                                <ul>
                                    <li><a href="##">Order Status</a></li>
                                    <li><a href="##">Delivery</a></li>
                                    <li><a href="##">Returns</a></li>
                                    <li><a href="##">Payment Options</a></li>
                                    <li><a href="##">Contact Us on Nike.com Inquiries</a></li>
                                    <li><a href="##">Contact Us On All Other Inquiries</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-inner">
                                <h5>About Nike</h5>
                                <ul>
                                    <li><a href="##">News</a></li>
                                    <li><a href="##">Careers</a></li>
                                    <li><a href="##">Investors</a></li>
                                    <li><a href="##">Sustainability</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 text-end">
                            <div className="footer-inner--icon">
                                <i><BsTwitter /></i>
                                <i><FaFacebookF /></i>
                                <i><TfiYoutube /></i>
                                <i><ImInstagram /></i>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4">
                            <div className="footer-bottom-left d-flex align-items-center">
                                <div className="footer-bottom-left--inner d-flex">
                                    <i><FiMapPin /></i>
                                    <h4>Bangladesh</h4>
                                </div>
                                <h5>© 2023 Nike, Inc. All Rights Reserved</h5>
                            </div>
                        </div>
                        <div className="col-lg-5 text-end">
                            <div className="footer-bottom-inner--right">
                                <ul>
                                    <li><a href="##">Guides</a></li>
                                    <li><a href="##">Terms of Sale</a></li>
                                    <li><a href="##">Terms of Usage</a></li>
                                    <li><a href="##">Nikee Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer