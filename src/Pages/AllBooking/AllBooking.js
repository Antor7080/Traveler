import React from 'react';
import { Table } from 'react-bootstrap';
import useBooking from '../../hooks/useBooking';

const AllBooking = () => {

    const [booking, setBooking] = useBooking();
    const handleUpdateStatus = id => {
        const url = `https://shrieking-eyeballs-10729.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Successfiully updated status")
                }
            })
    }

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
        <div className="container pt-5 text-center table-responsive">
            <h2 className="pt-5 pb-3  text-primary">MANAGE ALL BOOKING</h2>
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
                {booking?.map(data =>
                    <tbody key={data._id}>
                        <tr>

                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.destination} </td>
                            <td>{data.number} </td>
                            <td>{data.date} </td>
                            <td>
                                {data.status === 'Pending' ? <button onClick={() => handleUpdateStatus(data._id)} className="btn btn-primary">{data.status}</button> : <button className="btn btn-success">{data.status}</button>}
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteOrder(data._id)}
                                    className="btn btn-danger"
                                >
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

export default AllBooking;