import { useEffect, useState } from 'react';

const useBooking = () => {


    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-eyeballs-10729.herokuapp.com/placebooking')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [booking])
    return [booking, setBooking];


};

export default useBooking;