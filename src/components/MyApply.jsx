import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { data } from 'react-router-dom';
import Applyrow from './Applyrow';
import Swal from 'sweetalert2';

const MyApply = () => {
const {user} = useContext(Authcontext)
const [Apply,SetApply] = useState([])
const [search,setsearch] = useState('')
console.log('the search value is',search);





useEffect(()=>{
 
   myApplyData()
},[search])
const myApplyData =  async () =>{
  try{
 const {data} =  await axios.get(`${import.meta.env.VITE_API_URL}/MyApplymarathon/${user.email}?search=${search}`)
 console.log('my apply data is here', data);
 SetApply(data)
 
 }
  catch(error){
 toast.error(error.message)
  }
 }


const MyAApplyDelete =  async (id) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })
  .then(async (result) => {
    if (result.isConfirmed) {
      try{ 
 await axios.delete(`${import.meta.env.VITE_API_URL}/MyApplyDelete/${id}`)
myApplyData()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

      }
      catch(error){
        toast.error(error.message)
      }

    }
  }); 
}



    return (
        <>
<div className='flex justify-between p-1 overflow-hidden border rounded-lg w-6/12   focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
      <input
        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
        type='text'
        name='search'
        placeholder='Enter Job Title'
        aria-label='Enter Job Title'
       onChange={(e) =>{setsearch(e.target.value)}}
      />

      <button className='px-1 text-right md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
        Search
      </button>
    </div>

    <div className="overflow-x-auto">
         
  <table className="table table-xs">
  
    <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>title</th>
        <th>location</th>
        <th>Running</th>
        <th>startDate</th>
        <th>contact</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{
    Apply.map((aply)=> <Applyrow key={aply._id} aply={aply}  MyAApplyDelete={MyAApplyDelete}></Applyrow> )
}
  
    </tbody>

  </table>
</div>
</>
    );
};

export default MyApply;