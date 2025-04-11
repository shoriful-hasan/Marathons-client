import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
const MarathonRow = ({data,HandleDelete}) => {
    const {_id,marathonTitle,RegStartDate,RegEndDate,StartMarathoDate,RunningDistance,location}  = data
    return (
        <tr>
      
        <td>{marathonTitle}</td>
        <td>{RegStartDate}</td>
        <td>{RegEndDate}</td>
        <td>{StartMarathoDate}</td>
        <td>{RunningDistance}</td>
        <td>{location}</td>
        <td>
        <div className='space-x-2'>
        <button onClick={()=>HandleDelete(_id)} className='text-[15px]'><MdDelete /></button>
        <button className='text-[15px]'> <Link to={`/updatemarathon/${_id}`}><FaEdit /></Link> </button>
        </div>
        </td>
      </tr>
    );
};

export default MarathonRow;