import React, { useState } from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";

const SignUp = () => {
    const [seller, setSeller] = useState('user')
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const location = form.location.value;
        const user = {
            name: name,
            email,
            password: password,
            location: location,
            role: seller,
        }

       
    }
    return (
        <div className='min-h-[50vh] mb-[1%]'>
            <div className=' w-96 border mx-auto h-[600px] mt-[1%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Sign Up</h2>
                <form onSubmit={handleSignUp} className='flex flex-col'>
                    <input className='border p-3  rounded-lg' type="text" name="name" placeholder='Enter Your Name' id="" required/>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" required/>
                    <div className='flex gap-4 pb-3'>
                        <p className='text-2xl flex items-center gap-2 font-bold'>User: <span className='pt-2'><input onClick={()=> setSeller('user')} type="radio" name="radio-1" className="radio" checked /></span></p>
                        <p className='text-2xl flex items-center gap-2 font-bold'>Seller: <span className='pt-2'> <input onClick={()=> setSeller('seller')}  type="radio" name="radio-1" className="radio" /></span></p>
                    </div>
                    <input className='border p-3 rounded-lg my-5' type="password" name="location" placeholder='Enter Your location' id="" required/>
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" required/>
                    <input className='border p-3 rounded-lg my-5' type="password" name="confirm" placeholder='Enter Your confirm Password' id="" required/>
                    <input className='border p-3 btn' type="submit" value="Register" />
                </form>
                <div className='flex justify-center mt-5 gap-5 text-3xl text-[#f75353]'>
                    <button  className='cursor-pointer'><FaGoogle /></button>
                    <button className='cursor-pointer'><FaFacebook /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;