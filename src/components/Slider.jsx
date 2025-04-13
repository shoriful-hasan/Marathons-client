import React from 'react';

const Slider = ({text,image}) => {
    return (
        <div className='w-full bg-center bg-cover h-[38rem] bg-opacity-60 border-4 border-green-600'
        
        style={{
            backgroundImage : `url(${image})`
        }}
        >
           <div className='text-2xl flex justify-center items-center h-full'>
           <h1 className='text-gray-800 sm:text-2xl md:text-4xl lg:text-6xl '>{text}</h1>
           </div>
        </div>
    );
};

export default Slider;