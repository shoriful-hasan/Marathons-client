import axios from 'axios'
import  Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Authcontext } from '../Provider/Authprovider';
import { useContext, useEffect, useState } from 'react';
import { formatDate, parse } from 'date-fns';
import DatePicker from 'react-datepicker';

const Updatemarathon = () => {
   
    const [startregDate,SetstartregDate] = useState(new Date(),'dd-MM-yyyy')
    const [EndregDate,SetEndregDate] = useState(new Date(),'dd-MM-yyyy')
    const [MarathonStartDate,SetMarathonStartDate] = useState(new Date())
    const [CreatedAt,SetCreatedAt] = useState(new Date().toLocaleDateString())
    const [oldData,SetoldData] = useState([]);

    console.log('The Old Data is here',oldData)
    const navigate = useNavigate()
    const {user} = useContext(Authcontext)
    const {id} = useParams();
    console.log('the update data id is', id);
    
const {_id,email,marathonTitle,RegStartDate,RegEndDate,StartMarathoDate,MarathonCreatedDate,RunningDistance,location,MarathonImage,Description} = oldData || {}
const [Distance,setDistance] = useState(RunningDistance || '50k')

    useEffect(()=>{
        singleDataOld()
    },[id])

    const singleDataOld = async () =>{
     
       try{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/GetSingleDataDetails/${id}`)
        SetoldData(data)
        SetstartregDate(parse(data.RegStartDate, 'dd-MM-yyyy', new Date()))
        SetEndregDate(parse(data.RegEndDate, 'dd-MM-yyyy', new Date()))
        SetMarathonStartDate(parse(data.StartMarathoDate, 'dd-MM-yyyy', new Date()))

       }
       catch(error){
        toast.error(error.message)
       }
   
           
    }

    const updateData = async (e)=>{
        e.preventDefault()
    const formData            = e.target;
    const marathonTitle       = formData.marathonTitle.value;
    const RegStartDate        = formatDate(new Date(startregDate),'dd-MM-yyyy');
    const RegEndDate          = formatDate(new Date(EndregDate),'dd-MM-yyyy');
    const StartMarathoDate    = formatDate(new Date(MarathonStartDate),'dd-MM-yyyy');
    const MarathonCreatedDate = CreatedAt;
    const RunningDistance     = formData.Distance.value;
    const location            = formData.location.value; 
    const MarathonImage       = formData.MarathonImage.value;
    const Description         = formData.Description.value;
    const email               = user?.email;

  

    const Data = {
    marathonTitle,
    RegStartDate,
    RegEndDate,
    StartMarathoDate,
    MarathonCreatedDate,
    RunningDistance,
    location,
    MarathonImage,
    Description,
    } 

    console.table({Data});
    try{
        axios.put(`${import.meta.env.VITE_API_URL}/marathonUpdate/${_id}`,Data);
        navigate('/marathons')
    }
    catch(error) {
        toast.error(error.message)
    }
    
    }




    return (
       <div className='card mb-20'>
                    <form onSubmit={updateData}>
                       <div className='grid lg:grid-cols-2 gap-4   '>
       
                       <div className='col-span-full text-center'>
                 <label className="label">
                   <span className="label-text text-black dark:text-white">Marathon Title</span>
                 </label>
                 <input type="text" name='marathonTitle' placeholder="Marathone Title" className="input input-bordered w-full " defaultValue={marathonTitle} required />
               </div>
       
              
       
       <div className='input input-bordered w-full z-40'>
                 <label className="label">
                   <span className="label-text">Start Registration Date</span>
                 </label> <br />
                 <DatePicker
               selected={startregDate}
               onChange={(date) => SetstartregDate(date)}
           
             />
               </div>   
               
               <div className='input input-bordered w-full z-40'>
                 <label className="label">
                   <span className="label-text">End Registration Date</span>
                 </label> <br />
                 <DatePicker
               selected={EndregDate}
               onChange={(date) => SetEndregDate(date)}
                />
               </div>   
               
               <div className='input input-bordered w-full z-30'>
                 <label className="label">
                   <span className="label-text">Marathon Start Date</span>
                 </label> <br />
                 <DatePicker
               selected={MarathonStartDate}
               onChange={(date) => SetMarathonStartDate(date)}
               />
       
               </div>
       
     {
        oldData.RunningDistance &&
          
        <div className='input input-bordered w-full '>
       
       
        <label className="label">
         Running Distance
        </label><br />
        <select name="Distance" id="" className='border w-full p-2 rounded-md' value={RunningDistance} required>
          <option value="Select Your Distance">Select Your Distance</option>
          <option value="25K">25K</option>
          <option value="10K">10K</option>
          <option value="3K">3K</option>
        </select>
      </div>
     }
       {
        oldData.location && 
        
        <div className='input input-bordered w-full '>
       
       
        <label className="label">
         Location
        </label><br />
        <select name="location" id="" className='border w-full p-2 rounded-md' value={location} required>
          <option value="Select Your Distance">Select Your Location</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Comilla">Comilla</option>
        </select>
        </div>
       }
       
       
       
              
       
                      <div className='input input-bordered w-full'>
                 <label className="label">
                   <span className="label-text">CreatedAt</span>
                 </label>
                 <input type="text" placeholder="Created At" value={CreatedAt} className="input input-bordered w-full " required />
               </div>    
               <div className='input input-bordered w-full col-span-full'>
                 <label className="label">
                   <span className="label-text"></span>
                 </label>
                 <input type="text" name='MarathonImage' placeholder="Upload Marathons Image" value={MarathonImage} required />
               </div>
               <div className=' w-full col-span-full'>
                <textarea className='w-full' placeholder="Enter your description here..." rows='6' cols='30'  name="Description" id="" defaultValue={Description}></textarea>        
               </div>
               <div className='col-span-full'><button className='btn btn-secondary w-full'>Update</button></div>
                       </div>
                      
                    </form>
               </div>
    );
};

export default Updatemarathon;