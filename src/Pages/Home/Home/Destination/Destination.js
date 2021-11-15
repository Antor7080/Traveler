import React from 'react';
import { Link } from 'react-router-dom';

const Destination = ({ destination }) => {
    const { _id, serviceTitle, img, location, cost, time } = destination;
    return (
        <div className="col-lg-4 col-md-6  col-12 py-3">
            <div className="p-3 pb-5 border bg-light rounded ">
                <div>
                    <img className="img-fluid rounded" src={img} alt="" />
                </div>
                <h5 className="text-danger fw-bold py-3">{serviceTitle}</h5>
                <h6>{location}</h6>
                <div className="d-flex justify-content-evenly py-3">
                    <h5>{time}</h5>
                    <h5 className="text-danger"> Cost: {cost} ৳</h5>
                </div>
                <Link to={`/booking/${_id}`}>
                    <button className="btn-warning rounded py-2 px-3">More Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Destination;