import React from 'react';
import { Link } from 'react-router-dom';

const MarathonsCard = ({data}) => {
    const {_id, MarathonImage,marathonTitle,location,RegStartDate,RegEndDate} = data || {}
    console.log('the image is ',MarathonImage);
    
    return (
        <div className="card bg-slate-600 shadow-sm dark:bg-gray-800 dark:text-white">
  <figure>
    <img
      src={MarathonImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{marathonTitle}</h2>
    <p>Location    : {location}</p>
    <p>RegStartDate: {RegStartDate}</p>
    <p>RegEndDate  : {RegEndDate}</p>
    <div className="card-actions justify-end">
     <Link to={`/Details/${_id}`}><button className="btn btn-primary">See Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default MarathonsCard;