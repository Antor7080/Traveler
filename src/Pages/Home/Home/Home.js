import React from 'react';
import Banner from '../../Banner/Banner';
import Destinations from './Destinations/Destinations';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="pt-5">
            <Banner></Banner>
            <Destinations></Destinations>

            <div className="container">
                <div className="border p-5 bg-light">

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <h4 className="pt-5 fw-bold text-primary text-center">Why We?</h4>
                            <p>We’re on a mission to help people discover the real value of travel — to inspire, to give more reasons, to make it easy — for you to go. Our company was founded back in 2005, and since then, we’ve imagined and created some of the most well-loved products for travelers all around the world.</p>
                            <Link to={'/about'}>
                                <button className="btn-warning rounded py-2 px-3">More Details</button>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <img className="img-fluid" src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5 text-center">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12  p-3">
                        <h6>
                            Best Price Guaranteed
                        </h6>
                        <p>Book Flight With Guaranteed Lowest Fare Of Flight Bookings With Attractive Offers</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12  p-3">
                        <h6>
                            99.9% Customer Satisfaction
                        </h6>
                        <p>
                            We Offer Easy And Convenient Flight Bookings With Attractive Offers
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12   p-3">
                        <h6>
                            24/7 Customer Support
                        </h6>
                        <p>
                            Contact Our Dedicated Customer Care 24/7 For Any Service Or Assistance!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;