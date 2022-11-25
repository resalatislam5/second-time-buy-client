import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import '../Components/Loader/Loader.css'
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoutes = ({children }) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className='flex justify-center h-[70vh] items-center'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    }
    if(user && user.uid){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;