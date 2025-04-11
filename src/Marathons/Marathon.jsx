import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { data, useLocation } from 'react-router-dom';
import MarathonsCard from '../components/MarathonsCard';
import Nocontent from '../components/Nocontent';

const Marathon = () => {

const location = useLocation()


useEffect(()=>{
  HandleGetAllData()
},[])

const [job,setjob] = useState([])
const HandleGetAllData = async () =>{
   const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/GetAllMarathon`)
   console.log('the marathons Data are',data);
   setjob(data)
   
}
console.log('the alldata is',job);



    return (
        <div className='dark:bg-gray-700 '>
            <h1 className='text-center text-4xl font-semibold dark:text-white'>All Marathons {job.length}</h1>

<div className=' border-4 border-cyan-600 flex justify-center items-center'>
<div className={`${job.length > 0 ? 'grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3' : ''}`}>

{
job.length === 0 ? (<Nocontent></Nocontent>) : (
    job.map(data=><MarathonsCard key={data._id} data={data}></MarathonsCard>)
)

    
}

</div>
</div>



        </div>
    );
};

export default Marathon;