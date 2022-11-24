import React from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       
    }
    return (
        <div className='min-h-[50vh]'>
            <div className=' w-96 border mx-auto h-96 mt-[5%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col'>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" required/>
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" required/>
                    <button className='underline text-end mb-5 text-[#F86061]'>Forgotten password?</button>
                    <input className='border p-3 btn' type="submit" value="Login" />
                    <p>New to shop? <Link className='' to='/signup'>Create an account.</Link></p>
                </form>
                <div className='flex justify-center mt-5 gap-5 text-3xl text-[#f75353]'>
                    <button  className='cursor-pointer'><FaGoogle /></button>
                    <button className='cursor-pointer'><FaFacebook /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;