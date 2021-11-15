import React from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Footer.css'


const Footer = () => {
    return (
        <footer className="container-fluid pt-5 footer-container bg-dark mt-5 text-light">
            <div className="row text-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                    <h3>About Us</h3>
                    <p>Vision: We’re on a mission to help people discover the real value of travel — to inspire, to give more reasons, to make it easy — for you to go
                        <br />
                        Mission: To build a legacy of accessible, high quality, safe Tour for low and middle-income patients in emerging markets.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                    <img width="100"
                        height="80" src={logo} alt="" />

                    <h5>Email: traveler@gmail.com</h5>
                    <h5>Cell: +88019888888888</h5>

                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">

                    <h3> Useful Link</h3>
                    <NavLink to="/home">Home</NavLink>
                    <br />
                    <NavLink to="/addDestination">Add Destination</NavLink>
                    <br />
                    <NavLink to="/about">About Us</NavLink>
                    <br />
                    <NavLink to="/#">Facebook</NavLink>
                    <br />
                    <NavLink to="/#">Youtube</NavLink>
                </div>
                <p>
                    <small>© Copyright 2021 | All rights reserved.</small>
                </p>
            </div>
        </footer>
    );
};

export default Footer;