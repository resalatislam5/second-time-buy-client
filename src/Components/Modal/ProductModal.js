import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modal = ({name,email,itemName,price}) => {
    const [number,setNumber] = useState()
    const [location,setLocation] = useState()
    const navigate = useNavigate()
    const handleSubmit = () =>{
        axios({
            method: 'post',
            url: 'http://localhost:5000/booking',
            data: {
                name:name,
                email: email,
                itemName: itemName,
                price: price,
                number: number,
                location: location
            }
        });
        toast.success('Booking successfully')
        navigate('/')
        setNumber(null)
        setLocation('')

    }
    return (
        <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form>
                    <div className='my-5'>
                        <label className='text-xl font-semibold px-3'>Name:</label>
                        <span className='font-semibold text-xl mt-2'>{name}</span>
                    </div>
                    <div className='my-5'>
                        <label className='text-xl font-semibold px-3'>Email:</label>
                        <span className='font-semibold text-xl mt-2'>{email}</span>
                    </div>
                    <div className='my-5'>
                        <label className='text-xl font-semibold px-3'>itemName:</label>
                        <span className='font-semibold text-xl mt-2'>{itemName}</span>
                    </div>
                    <div className='my-5'>
                        <label className='text-xl font-semibold pl-3'>price: </label>
                        <span className='mt-2 font-bold'>${price}</span>
                    </div>
                    <div className='my-5'>
                        <label className='text-xl font-semibold block pl-3'>Phone number:</label>
                        <input type="number" onChange={(e)=> setNumber(e.target.value)} name='number' className='bg-gray-300 py-3 px-6 rounded-xl mt-2 w-full'  placeholder='Enter your number' required/>
                    </div>
                    <div className='my-5'>
                        <label className='text-xl font-semibold block pl-3'>meeting location:</label>
                        <input type="text" onChange={(e)=> setLocation(e.target.value)} name='meetingLocation' className='bg-gray-300 py-3 px-6 rounded-xl mt-2 w-full'  placeholder='Enter your location' required/>
                    </div>
                    <div className="modal-action">
                    <label onClick={handleSubmit} type='submit' htmlFor="my-modal" className="btn">Booking</label>
                    </div>
                    </form>
                </div>
                </div>
        </div>
    );
};

export default Modal;