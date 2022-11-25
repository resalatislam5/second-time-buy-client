import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const NotFound = () => {
    const {logOut} = useContext(AuthContext)
    const handleLogOut= () =>{
        logOut()
        .then(()=>{
            toast.success('logout Successfully')
        })
    }
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[100vh] justify-center flex  items-center'>
            <div className='w-[700px] bg-white text-center'>
                <h1 className='text-[18vh] font-bold text-[#6DB0DB] '>404</h1>
                <h4 className='text-4xl font-bold'>
               Opps! Page not found
            </h4>
            <p className='text-2xl mt-2'>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div className='flex gap-5 justify-center p-10'>
               <Link to='/' className='btn btn-outline btn-success'>return home</Link>
               <button onClick={handleLogOut} className='btn btn-outline btn-success'>Logout</button>
            </div>
            </div>
        </div>
    );
};

export default NotFound;