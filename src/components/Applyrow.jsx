import React, { useContext, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Authcontext } from '../Provider/Authprovider';
import axios from 'axios';
import toast from 'react-hot-toast';

const Applyrow = ({aply,MyAApplyDelete,SetApply,myApplyData}) => {
    
  const {_id,title,startDate,firstName,LastName,contact,Running,location,email} = aply

const updateApply = async (e) =>{
e.preventDefault();
const formData = e.target;
const fname    = formData.Fname.value;
const lname    = formData.Lname.value;
const phone    = formData.contact.value;
console.table({fname,lname,phone})  
const applyUpdateData = {
  fname,lname,phone
}
try{
 const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/MyApplyUpdate/${_id}`,applyUpdateData)
 SetApply(data);
 myApplyData()
}
catch(error){
  toast.error(error.message)
}

}


    return (
    <>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <form onSubmit={updateApply}>
        <div>
          <label className="label">Email</label> <br />
          <input type="email"  Value={email}  className="input w-full" /><br />
          </div>
          <div>
          <label className="label">First Name</label> <br />
          <input type="text" defaultValue={firstName} name='Fname' className="input w-full" /><br />
          </div>
          <div>
          <label className="label">Last Name</label> <br />
          <input type="text" defaultValue={LastName} name='Lname' className="input w-full" /><br />
          </div>
          <div>
          <label className="label">Contact Number</label> <br />
          <input type="text" defaultValue={contact}  name='contact' className="input w-full" /><br />
          </div>
             <div className='flex justify-center items-center'>
             <button type='submit' className="btn btn-primary mt-2 w-full ">Update</button>
             </div>
          </form> 
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        <tr>
        <td>{firstName}</td>
        <td>{LastName}</td>
        <td>{title}</td>
        <td>{location}</td>
        <td>{Running}</td>
        <td>{startDate}</td>
        <td>{contact}</td>
        <td className='space-x-2'>
        <button onClick={()=>MyAApplyDelete(_id)}><MdDelete className='text-[15px]' /></button>
        <button onClick={()=>document.getElementById('my_modal_1').showModal()}><FaEdit className='text-[15px]' /></button>
        </td>
      </tr>
      </>
    );


    
};

export default Applyrow;