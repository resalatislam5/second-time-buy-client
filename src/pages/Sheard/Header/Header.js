import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../ass/logo.png'
import profile from '../../../ass/Profile.png'
import CommonButton from '../../../Components/Button/CommonButton';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
  const {logOut,user} = useContext(AuthContext)
  const handleLogOut= () =>{
    logOut()
    .then(()=>{
        toast.success('logout Successfully')
    })
}
  const items = [
    <>
      <li><Link to='/'>Shop Single Product</Link ></li>
                      { user &&
                        <li><Link to='/dashboard'>Dashboard</Link ></li>
                      }
                      <li tabIndex={0}>
                        <Link to='/'>
                        Adventures
                          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link >
                        <ul className="p-2">
                          <li><Link to='/'></Link ></li>
                          <li><Link to='/'></Link ></li>
                        </ul>
                      </li>
                      <li><Link to='/'>Events</Link ></li>
                      <li><Link to='/blog'>Blog</Link ></li>
                      <li><Link to='/'>Contact us</Link ></li>
    </>
  ]

    return (
        <div>
            <div className="navbar bg-[#1A2A49] text-white py-4 px-7">
  <div className="navbar-start">
                    <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52">
                        {items}
                        <li>
                        {
                          user ?
                          <p onClick={handleLogOut}><CommonButton text={'logOut'} /></p>
                          :
                          <Link to='/login'><img className='w-5' src={profile} alt="" /></Link>
                        }
                        </li>
                      </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="" /></Link >
                  </div>
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                      {items}
                    </ul>
                  </div>
                  <div className="navbar-end">
              <div className='profile mr-6 hidden lg:flex'>
                  {
                    user ?
                    <p onClick={handleLogOut}><CommonButton text={'logOut'} /></p>
                    :
                    <Link to='/login'><img className='w-5' src={profile} alt="" /></Link>
                  }
                </div>
              <div className="dropdown dropdown-end pr-4">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </label>
                  <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to='/' className="btn bg-[#EC6861] px-5 text-xl hover:bg-[#f57871] hidden lg:flex">View All Adventures</Link >
              </div>
            </div>
        </div>
    );
};

export default Header;