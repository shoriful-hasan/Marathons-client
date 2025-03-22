import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* this is navbar */}
            <Navber></Navber>
            {/* this is outlet which show the children components */}
          <div className='min-h-[calc(100vh-306px)]'>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;