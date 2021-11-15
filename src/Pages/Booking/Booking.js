import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useDestinations from '../../hooks/useDestinations';
import './Booking.css'



const Booking = () => {

    const { user } = useAuth()
    const { id } = useParams();
    const [destinations] = useDestinations();
    const [destination, setDestination] = useState();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const singaleDestinations = destinations.find((s) => s?._id === id);
        setDestination(singaleDestinations);
    }, [destinations, id])



    const onSubmit = data => {
        console.log(data)
        axios.post('https://shrieking-eyeballs-10729.herokuapp.com/placebooking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully');
                    reset();
                }
            })
    };


    return (
        <div className="container pt-5">
            <h2 className="pt-5 text-center">MORE ABOUT: {destination?.serviceTitle.toUpperCase()}</h2>
            <div className="row">
                <div className=" text-center col-lg-6 col-md-6 col-12">

                    <img className="py-3 rounded w-100" src={destination?.img} alt="" />
                    <p >{destination?.details}</p>
                </div>
                <div className=" text-center col-lg-6 col-md-6 col-12">
                    <div className="booking-information mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" defaultValue={user?.displayName} />
                            <input type="email" {...register("email")} placeholder="Email" defaultValue={user?.email} />
                            <input {...register("address", { required: true })} placeholder="Address" />
                            <input {...register("number", { required: true })} placeholder="Phone Number" />
                            <input {...register("destination", { required: true })} placeholder="Destination" defaultValue={destination?.serviceTitle} />
                            <input type="date"{...register("date", { required: true })} />

                            <input type="hidden" {...register("status", { hidden: true })} defaultValue="Pending" />
                            <input className="btn btn-primary" type="submit" value="Booking" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;