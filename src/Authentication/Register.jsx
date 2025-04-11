import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';
import toast from 'react-hot-toast';

const Register = () => {
const {NewUserRegister,updateprofile,setuser} = useContext(Authcontext)
const location = useLocation();
const navigate = useNavigate();
const from = location?.state || '/'
const handleRegister = async (e)=>{
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const photoUrl = formData.photoUrl.value;
    const email = formData.email.value;
    const password = formData.password.value;
    console.table({name,photoUrl,email,password})
    try{
const result = await NewUserRegister(email,password)
setuser(result)
toast.success('Register Successfully Done');
navigate(from,{replace : true})
    }
    catch(error){
        console.log(error.message);
        
    }
}
    return (
        <div>
            <div className='mt-3 mb-3 flex justify-center'>
                       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                 <div className="card-body">
                   <form onSubmit={handleRegister} >
                       <label className='fieldset-label'>Name</label>
                       <input type="text" className='input' name='name' placeholder='Name'/>
                       <label className='fieldset-label'>Photo URL</label>
                       <input type="text" className='input' name='photoUrl' placeholder='Upload your photo Url'/>
                     <label className="fieldset-label">Email</label>
                     <input type="email" className="input" name='email' placeholder="Email" />
                     <label className="fieldset-label">Password</label>
                     <input type="password" className="input" name='password' placeholder="Password" />
                     <div className='flex justify-center'><button type='submit' className="btn btn-neutral mt-4 w-full">Register</button></div>
                   </form>
                 </div>
                 <div>
                   <p className='text-green-400 text-center pb-3'>Already have an Account<span className='text-red-400'><Link to='/Login'>Login</Link></span></p>
                 </div>
               </div>
                   </div>
        </div>
    );
};

export default Register;
