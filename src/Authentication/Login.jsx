import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Authcontext } from '../Provider/Authprovider';

const Login = () => {
const {signin,Googlesignin}  = useContext(Authcontext) 

const handleLogin = (e) =>{
    e.preventDefault();
const formData = e.target;
const email  = formData.email.value;
const password = formData.password.value;
console.table({email,password})   
try{
signin(email,password)
toast.success('Sign in Successfully')
}
catch(error){
    toast.error(error.message)
}
    
}

const GoogleLogin = async () =>{
    try{
      await  Googlesignin()
      toast.success('Google Login Successfully')
    }
    catch(error){
toast.error(error.message)
    }
}




    return (
        <div className=' dark:bg-gray-500 h-screen'>
            <div className='flex justify-center items-center h-full'>
            <div className="card bg-base-300 border-2 border-cyan-200 w-full max-w-sm shrink-0 shadow-2xl p-2">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div className='flex justify-center'><button type='submit' className="btn btn-neutral mt-4 w-full">Login</button></div>
          <div className='flex justify-center'><button onClick={GoogleLogin} className=''>Google</button></div>
        </form>
      </div>
      <div>
        <p className='text-red-400 text-center'>Don't have An Account <span className='text-green-400'><Link to='/Register'>Register</Link></span></p>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Login;