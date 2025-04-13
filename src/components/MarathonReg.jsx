import React, { use, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import toast from 'react-hot-toast';
import axios from 'axios';
/**
 * Email (auto-filled for logged-in users, also add marathon title and start date Readonly), 
 * First Name, 
 * Last Name, 
 * Contact Number,
 *  and Additional Info.
 * **/ 
const MarathonReg = () => {
  const {user} = useContext(Authcontext)
  const email = user?.email;
  // console.log('the loged in user', email);
  const location = useLocation();
  const MarathonDetails  = location.state?.value;
  // console.log('the proper data is ', MarathonDetails);
  const navigate = useNavigate();
  useEffect(() => {
    if (!MarathonDetails) {
      navigate("/");
    }
  }, [MarathonDetails]);
  
const HandleReg = (e) =>{
  e.preventDefault()
  // console.log('the button are click');
  const formData   = e.target;
  const title      = MarathonDetails?.marathonTitle;
  const startDate  = MarathonDetails?.StartMarathoDate;
  const firstName  = formData.fname.value;
  const LastName   = formData.Lname.value;
  const contact    = formData.contact.value;
  const marathonID = MarathonDetails?._id;
  const Running    = MarathonDetails?.RunningDistance;
  const location   = MarathonDetails?.location; 
  const email = user?.email;
  const Data = {
    title,startDate,firstName,LastName,contact,marathonID,email,Running,location
  }  
  console.table({Data});
  

try{
axios.post(`https://server-fawn-three.vercel.app/MarathonReg`,Data)
navigate('/dashboard')
}
catch(error){
  toast.error(error.message)
}

}




    return (
        <div className='flex justify-center items-center'>
            <div className=''>
            <h1 className='text-center text-3xl'>Welcome To The Registration Page</h1>
            <div className="card-body border flex justify-center">
        <form onSubmit={HandleReg}>
          <div>
          <label className="label">Email</label> <br />
          <input type="email" value={email} className="input w-full" /><br />
          </div>
          <div>
          <label className="label">Marathon Title</label> <br />
          <input type="text" value={MarathonDetails?.marathonTitle} className="input w-full" /><br />
          </div>
          <div>
          <label className="label">Marathon Start Date</label> <br />
          <input type="text" value={MarathonDetails?.StartMarathoDate} className="input w-full" /><br />
          </div>
          <div>
          <label className="label">First Name</label> <br />
          <input type="text" className="input w-full" name='fname' placeholder="First Name" /><br />
          </div>
          <div>
          <label className='label'>Last Name</label> <br />
          <input type="text" className='input w-full' name='Lname' placeholder='Last Name'/><br />
          </div>
          <div>
          <label className='label'>Contact Number</label><br />
          <input type="number" className='input w-full' name='contact' placeholder='contact number' /> <br />
          </div>
             <div className='flex justify-center items-center'>
             <button type='submit' className="btn btn-primary mt-2 w-full ">Register</button>
             </div>
          </form>
            </div>
      </div>
        </div>
    );
};



export default MarathonReg;