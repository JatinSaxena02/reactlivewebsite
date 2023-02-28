import React from "react";
import logo from "./Images/logo.jpg"
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear()

    return <>
        <div className="footer-main-div">
            <div className="container-fluid mb-5 footer-background-color">

                <div className="footer-div col-10 mx-auto">
                    <div className="footer-logo mt-5">
                        <img src={logo} alt="footer-logo" />
                    </div>
                    <div className="footer-category">
                        <div className="footer-category-list">
                            <p>customer service</p>
                            <ul className="footer-ul-style">
                                <li><NavLink to="/" className="nav-link">Contact Us</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Track Order</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Return Order</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Cancel Order</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-category-list">
                            <p>company</p>
                            <ul className="footer-ul-style">
                                <li><NavLink to="/" className="nav-link">About Usr</NavLink></li>
                                <li><NavLink to="/" className="nav-link">We're Hiring</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Terms & Conditions</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Privacy Policy</NavLink></li>
                                <li><NavLink to="/" className="nav-link">Blog</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-category-list">
                            <p>connect with us</p>
                            <ul className="footer-ul-style">
                                <li><FaInstagram />1M Followers</li>
                                <li><FaTwitter />Follow on Twitter</li>
                                <li><FaFacebook />4.7 People Like this</li>
                                <li><FaLinkedin />Follow on Linkedin</li>
                            </ul>
                        </div>
                        <div className="footer-category-list">
                            <p>keep up to date</p>
                            <ul className="footer-ul-style">
                                <li>Contact Us</li>
                                <li>Track Order</li>
                                <li>Return Order</li>
                                <li>Cancel Order</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <p>Copyright @ {year}.|| All rights are reserved.</p>
        </footer>
    </>
}

export default Footer