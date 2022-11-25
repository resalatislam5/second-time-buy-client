import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
            <li><Link to='/alluser'>AllUser</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashboardLayout;