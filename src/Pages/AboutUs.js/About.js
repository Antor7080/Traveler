import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const About = () => {
    return (
        <div className="pt-5">
            <h2 className="pt-5 fw-bold text-primary text-center">ABOUT US?</h2>
            <div className="container">
                <div className="border p-3 bg-light text-center">

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">

                            <img className="pt-5 img-fluid " src={logo} alt="" />


                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <h4 className="pt-5 fw-bold text-primary text-center">Why We?</h4>
                            <p>We’re on a mission to help people discover the real value of travel — to inspire, to give more reasons, to make it easy — for you to go. Our company was founded back in 2005, and since then, we’ve imagined and created some of the most well-loved products for travelers all around the world.</p>

                            <p>
                                Today, Traveler is used by millions of people every month — people who travel for adventure, for work, for family and for many other reasons. That’s why we work tirelessly to make your experience of planning & booking flights, hotels and trips as seamless as possible.
                            </p>
                            <p>
                                Traveler is more than just an app, a website or a company. Traveler is an idea and belief that everyone has an innate desire and yearning to travel — to experience, to live and to grow.
                            </p>
                            <p>
                                So ingrained is this idea of the human need to travel that we’ve woven this emotional and eternal question of “why we go?” into the name of our organisation — Traveler
                            </p>

                        </div>

                    </div>
                    <Link to={'/home'}>
                        <button className="btn-warning rounded py-2 px-3">Back Home </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default About;