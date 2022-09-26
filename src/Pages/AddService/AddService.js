import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);

        axios.post('http://localhost:3001/services', data)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                alert('Added Successfully!')
            }
        })
    };

    return (
        <div className='add-service'>
            <h2>Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Service Details' {...register("details")} />
                <input placeholder='Price' type="number" {...register("price", { required: true, min: 99, max: 99999 })} />
                <input placeholder='Image URL' {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;