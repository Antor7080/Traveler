import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddDestination.css'

const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://shrieking-eyeballs-10729.herokuapp.com/destinations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-destination pt-5">
            <h2 className="pt-5 pb-3 text-primary text-center">PLEASE ADD A DESTINATION</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("serviceTitle", { required: true, maxLength: 50 })} placeholder="Name" />
                <input {...register("location", { required: true })} placeholder="Location" />
                <input {...register("time", { required: true })} placeholder="Time" />
                <input {...register("img", { required: true })} placeholder="Image Link" />
                <input type="number" {...register("cost", { required: true })} placeholder="Cost" />
                <textarea {...register("details", { required: true })} placeholder="Details" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddDestination;