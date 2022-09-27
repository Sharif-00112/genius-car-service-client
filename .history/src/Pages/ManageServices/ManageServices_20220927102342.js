import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3001/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div>
            <h2>Manage Services</h2>
            <br />
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}</h5>
                    <button>Delete</button>
                    <br />
                </div>)
            }
        </div>
    );
};

export default ManageServices;