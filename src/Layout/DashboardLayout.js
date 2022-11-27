import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import '../Components/Loader/Loader.css'

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
      const {data:UserRole,isLoading }= useQuery({
        queryKey:['email'],
        queryFn: async() =>{
          const res = await fetch(`http://localhost:5000/userrole?email=${user?.email}`);
          const data = res.json()
          return data
        }
      })
    if(isLoading){
      return <div className='flex justify-center h-[70vh] items-center'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    }
    const role = UserRole.role
    console.log(UserRole.role)
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className='flex justify-center mt-5'>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open dashboard slider</label>
          </div>
            <Outlet />
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100 text-base-content border">
            <li><Link to='/'>Home</Link></li>
            {
              role === 'user' &&
              <li><Link to='/dashboard/orders'>My Orders</Link></li>
            }
            {
              role === 'admin' &&
            <>
              <li><Link to='/dashboard/alluser'>AllUser</Link></li>
              <li><Link to='/dashboard/report'>Reported Items</Link></li>
            </>
            }
            {
              role === 'seller' &&
            <>
            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
            <li><Link to='/dashboard/myproducts'>My Products</Link></li>
            </>
            }
          </ul>
        
        </div>
      </div>
    );
};

export default DashboardLayout;