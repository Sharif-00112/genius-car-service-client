import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const{serviceId} = useParams();

    const [service, setService] = useState({});

    useEffect(() =>{
        fetch(`https://warm-basin-76667.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))

    } ,[])

    return ( 
        <div>
            <h2>Details of: {service.name}</h2>
            <small className='text-secondary p-2 m-2'>Service Code - {serviceId}</small>
        </div>
    );
};

export default Booking;