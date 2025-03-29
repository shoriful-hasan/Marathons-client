import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='dark:bg-gray-800'>
         <h1 className='text-center text-4xl dark:text-white mb-10'>User Dashboard</h1>

<div className='grid grid-cols-12 gap-3  min-h-[calc(100vh-306px)]'>
    <div className='lg:col-span-2  sm:col-span-full p-2  bg-slate-500'>
        <ul className='flex justify-center space-x-3 space-y-3 lg:flex-col'>
              <button><NavLink to='Addmarathons' className='text-[10px]'>Add Marathons</NavLink></button>
           <button><NavLink to='MymarathonsList' className='text-[10px]'>My Marathons List</NavLink></button>
           <button><NavLink to='MyApplyList' className='text-[10px]'>My Apply</NavLink></button>
        </ul>
        
        
        </div>

    <div className='lg:col-span-10 md:col-span-10 sm:col-span-full px-6'>
        <Outlet></Outlet>
    </div>
</div>


        </div>
    );
};

export default Dashboard;