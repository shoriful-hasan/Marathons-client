
import { Button,Navbar } from "flowbite-react";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md"
import navlogo from '../assets/navlogo.webp'
import React, { useContext } from 'react';
import { Link, Links, NavLink } from "react-router-dom";
import { useTheme } from "../Provider/Themecontext";
import '../Navber/navber.css'
const Navber = () => {
const {theme,toggleTheme} = useTheme();

  return (
    <div className="border-red-400 border-2 ">
      <div className="navbar bg-base-100 shadow-sm dark:bg-gray-800 dark:text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Marathon</a></li>
        <li><a> Dashboard</a></li>
        <li><button>Login</button></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl w-20 h-20 "><img src={navlogo} className="w-full rounded-full" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
      <li><NavLink to="marathons" className={({ isActive }) => isActive ? 'active' : ''}>Marathons</NavLink></li>
      <li><NavLink to="dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end space-x-3">
<div>    <button>Login</button></div>
<div>
<Button onClick={toggleTheme}>
  {theme === 'light' ? <CiLight className="mr-2 text-blue-500 text-[30px]" /> : <MdLightMode className="mr-2 text-gray-100 text-[30px]" />}
</Button>

</div>
  </div>
</div>
    </div>
  );
};

export default Navber;