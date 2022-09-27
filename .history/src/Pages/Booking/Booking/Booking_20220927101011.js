import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const{serviceId} = useParams();

    const {service, setService} = useState({});

    useEffect(() =>{
        fetch(`http://localhost:3001/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))

    } ,[])

    return ( 
        <div>
            <h2>Details of: {service.name}</h2>
            <h2 className='text-secondary p-2 m-2'>This is Booking {serviceId}</h2>
        </div>
    );
};

export default Booking;