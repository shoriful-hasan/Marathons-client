import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Timer from './Timer';
import { formatDate } from 'date-fns';
import toast from 'react-hot-toast';

const MarathonDetails = () => {
const {id} = useParams()
// console.log('the Details page id is ', id);
const [MarathonDetails,SetMarathonDetails] = useState([])
// console.log('my name is shoriful hasan and this is Details Data',MarathonDetails);

useEffect(()=>{
    DetailsDataGet()
},[id])

const DetailsDataGet = async() =>{

  try{
    const {data} = await axios.get(`https://server-fawn-three.vercel.app/GetSingleDataDetails/${id}`)
    SetMarathonDetails(data);
    // console.log('the error data is',data);
    
  }
catch(error){
    // console.log(error.message);
    toast.error(error.message)
    
}

}

const today  = new Date();
const actualDate = formatDate(today,'dd-MM-yyyy')
// console.log('today is ', actualDate);


const {marathonTitle,RegStartDate,RegEndDate,StartMarathoDate,MarathonCreatedDate,RunningDistance,location,MarathonImage,Description,Regmarathon} = MarathonDetails || {}



    return (
        <div className='flex flex-col justify-center items-center pt-4 pb-3 dark:bg-gray-600 dark:text-slate-300'>

           <div>
            <div><img src={MarathonImage} alt="" /></div>
            <div><h1 className='text-5xl'>TiTLE : <span className='capitalize'>{marathonTitle}</span></h1></div>
            <div> 
                <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <li className='border-2 border-red-300'>Total Register : {Regmarathon}</li>
                    <li className='border-2 border-red-300'>RegStartDate : {RegStartDate}</li>
                    <li className='border-2 border-red-300'>RegEndDate : {RegEndDate}</li>
                    <li className='border-2 border-red-300'>StartMarathoDate: {StartMarathoDate}</li>
                    <li className='border-2 border-red-300'>RunningDistance : {RunningDistance}</li>
                    <li className='border-2 border-red-300'> Location : {location}</li>
                    <li className='border-2 border-red-300'>Marathon Created Date : {MarathonCreatedDate}</li>
                </ul>
            </div>


            </div>           

            <div className=''>
                <div><h1 className='text-3xl text-center mb-6'>Description</h1></div>
                <div className='mb-4'>
                    <p>{Description}</p>
                </div>
            </div>




           <div className='space-x-3'>
           <Link to='/marathons'><button className="btn btn-primary">Back To Marathons</button></Link>
          {
            RegEndDate > actualDate ? ( <Link to='/marathonReg' state={{value: MarathonDetails}}><button className="btn btn-primary">Register Now</button></Link> ) :(<Link to='/marathons'><button className='btn btn-warning'>Time Over</button></Link>)
          }
           </div>
           <div>
          {
            <Timer RegEndDate={RegEndDate}></Timer>
          }

           </div>
        </div>
    );
};

export default MarathonDetails;