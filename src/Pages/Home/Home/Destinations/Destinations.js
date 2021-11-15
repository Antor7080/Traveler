import React from 'react';
import useDestinations from '../../../../hooks/useDestinations';
import Destination from '../Destination/Destination';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
const Destinations = () => {
    const [destinations] = useDestinations();

    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center py-5  fs-larg">
            <Spinner animation="border" variant="primary" />
        </div>
    }
    return (
        <div className="container">
            <h1 className="pt-5 fw-bold text-primary text-center">WELCOME TO TOP TRAVELER</h1>
            <h4 className="pt-2  text-warning text-center">LETS SEE SOME PACKAGES</h4>
            <div className="row  text-center">
                {
                    destinations.map(destination => <Destination key={destination._id} destination={destination}>
                    </Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;