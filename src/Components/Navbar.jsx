import React from 'react';
import { NavLink } from 'react-router';
import  logo from '../assets/book.ico'


const Navbar = () => {

    
    const links=<>
    <li><NavLink to={'/'} className={({isActive})=>`font-semibold ${isActive? "text-green-600 border border-green-600":""}`} >Home</NavLink></li>
    <li><NavLink to={'/books'} className={({isActive})=>`font-semibold ${isActive?"text-green-600 border border-green-600":""}`}>Listed Books</NavLink></li>
    <li><NavLink to={'/page_to_read'} className={({isActive})=>`font-semibold ${isActive?"text-green-600 border border-green-600":""}`}>Pages To Read</NavLink></li>
    </>
    return (
 <div className="navbar bg-base-100 shadow-sm px-4">

  {/* Left */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        {links}
      </ul>
    </div>

     <div className="flex items-center gap-2 ml-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-gray-800">
            Book <span className="text-green-600">Vibe</span>
          </h1>
        </div>
  </div>

  {/* Center */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-x-2">
      {links}
    </ul>
  </div>

  {/* Right */}
  <div className="navbar-end gap-2">
    <a className="btn  btn-success rounded-lg">Sign In</a>
    <a className="btn btn-info rounded-lg">Sign Up</a>
  </div>

</div>
    );
};

export default Navbar;