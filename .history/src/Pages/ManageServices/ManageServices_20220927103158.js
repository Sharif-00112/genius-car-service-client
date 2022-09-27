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

    const handleDelete = id =>{
        const url = `http://localhost:3001/services/:${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            <br />
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}</h5>
                    <button onClick={ () => handleDelete(service._id) }>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;