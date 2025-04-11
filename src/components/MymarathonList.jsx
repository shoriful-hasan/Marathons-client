import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import toast from 'react-hot-toast';
import axios from 'axios';
import { data } from 'react-router-dom';
import MarathonRow from './MarathonRow';
import Swal from 'sweetalert2'
const MymarathonList = () => {
const [marathon,setmarathon] = useState([])
const {user} = useContext(Authcontext)

console.log('the login user is', user?.email);
useEffect(()=>{
    handlegetData()
},[user])
// get the data in specific user
const handlegetData = async () =>{
try{
   const {data} =   await axios.get(`${import.meta.env.VITE_API_URL}/Mymarathons/${user?.email}`)
   setmarathon(data)
}
catch(error){
    toast.error(error.message)
}
}

const HandleDelete = async (id)=>{
console.log('the click in another component', id);

Swal.fire({
    title: "Are you sure?",
    text: "Can you Delete",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then(async (result) => {

    if (result.isConfirmed) {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/marathon/${id}`)
            handlegetData()
            
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
        }
         catch (error) {
            toast.error(error.message)
        }
    }
  });
}



    return (
        <div>
            <h1>My Marathons List {marathon.length}</h1>

            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Title</th>
        <th>RegStartDate</th>
        <th>RegEndDate</th>
        <th>StartMarathoDate</th>
        <th>Distance</th>
        <th>location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{
    marathon.map(data=> <MarathonRow key={data._id} data={data} HandleDelete={HandleDelete}></MarathonRow> )
}
      </tbody>
      </table>
</div>

        </div>
    );
};

export default MymarathonList;