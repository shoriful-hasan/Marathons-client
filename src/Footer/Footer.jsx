import React from 'react';
import footerlogo from '../assets/navlogo.webp'
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-gray-400 dark:bg-black dark:text-white text-base-content p-10">
  <aside>
<Link to='/'><img src={footerlogo} className='w-[50px] h-[50px]' alt="" /></Link>
    <p>
    Stridex 
      <br />
      Fast, modern, and athletic.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Description</h6>
    <p>
    Your trusted partner in marathon and race management — <br />from registration to the finish line.
    Stay connected with us on <br /> social media for the latest race updates, tips, and stories from the track.
    </p>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
<Link to='/marathons'>Marathon</Link>
<Link to='/login'>Login OR Register</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Connect With me</h6>
  <div className='flex space-x-3'>
  <a className="link link-hover" href='https://www.facebook.com/sh.shoriful.855613' target='_blank'><CiFacebook className='text-white text-2xl' /></a>
  <a className="link link-hover" href='https://www.linkedin.com/in/shoriful-hasan91/' target='_blank' ><FaLinkedin className='text-white text-2xl' /></a>
  </div>
   
  </nav>
</footer>
    );
};

export default Footer;