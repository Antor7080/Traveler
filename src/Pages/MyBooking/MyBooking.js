import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useBooking from '../../hooks/useBooking';

const MyBooking = () => {
    const [booking, setBooking] = useBooking();
    const { user } = useAuth();
    const [singleUserData, setSingleUserData] = useState();

    useEffect(() => {
        const singleUserOrder = booking.filter((s) => s?.email === user.email);

        setSingleUserData(singleUserOrder);
    }, [booking, user.email])

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
            const url = `https://shrieking-eyeballs-10729.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrders = booking.filter((order) => order._id !== id);
                        setBooking(remainingOrders);
                    }
                });
        }
    };


    return (
        <div className="container pt-5  table-responsive">
            <h2 className="pt-5 pb-3 text-primary text-center">MY ALL BOOKING</h2>
            <Table striped bordered hover variant="secondary">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Destination</th>
                        <th>Number</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {singleUserData?.map(data =>
                    <tbody keu={data._id}>
                        <tr>

                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.destination} </td>
                            <td>{data.number} </td>
                            <td>{data.date} </td>

                            <td>
                                <p className="text-primary fw-bold">{data.status}</p>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteOrder(data._id)}
                                    className="btn btn-danger">
                                    X
                                </button>
                            </td>
                        </tr>

                    </tbody>
                )}
            </Table>
        </div>
    );
};

export default MyBooking;