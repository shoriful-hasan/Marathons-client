import React, { useEffect, useState } from 'react';
import Swipslide from '../components/Swipslide';
import axios from 'axios';
import MarathonsCard from '../components/MarathonsCard';
import img1 from '../assets/mr1.jpg'
import img2 from '../assets/mr2.jpg'
import img3 from '../assets/mr3.jpg'
import img4 from '../assets/marathons4.jpg'
import img5 from '../assets/mr4.jpg'
import img6 from '../assets/marathons6.jpg'
const Home = () => {
const [jobs,setjobs] = useState([])
useEffect(()=>{
    handlejobs()
},[])
const handlejobs = async () =>{
    const {data} = await axios.get(`https://server-fawn-three.vercel.app/marathonsLimit`)
    // console.log('the home data', data);
    setjobs(data)
    
}
// console.log('the data is',jobs);

    return (
        <div>
            <Swipslide></Swipslide>
            <div>
                <h1 className='sm:text-xl md:text-2xl lg:text-4xl text-center'>Marathons</h1>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2 p-2'>
                {
                    jobs.map(data => <MarathonsCard key={data._id} data={data}></MarathonsCard>)
                }
            </div>

<div className='p-2'>
    <h1 className='sm:text-xl md:text-2xl lg:text-4xl text-center'>U<span className='text-lime-500'>P</span> Com<span className='text-lime-400'>I</span>ng Marath<span className='text-lime-300'>o</span>n</h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-2'>
{/* static card 1 */}
    <div className="card bg-base-100 bg-slate-300 dark:text-white dark:bg-gray-800  shadow-sm">
  <figure>
    <img
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Event 1: City Marathon – April 15, 2025

    </h2>
    <p>A scenic marathon through the heart of the city, featuring a half marathon and 10K options.</p>

  </div>
</div>

{/* static card 2 */}
<div className="card bg-base-100 bg-slate-300 dark:text-white dark:bg-gray-800 shadow-sm">
  <figure>
    <img
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Event 2: Spring Trail Run – May 5, 2025
    </h2>
    <p>A nature-inspired marathon on a beautiful forest trail, perfect for beginners and seasoned runners.</p>
  </div>
</div>


{/* static card 3 */}
<div className="card bg-base-100 bg-slate-300 dark:text-white dark:bg-gray-800 shadow-sm">
  <figure>
    <img
      src={img2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Event 3: Oceanfront Marathon – June 20, 2025</h2>
    <p>A coastal marathon with breathtaking ocean views and refreshing sea breeze along the route</p>
  </div>
</div>
{/* static card 4 */}
<div className="card bg-base-100 bg-slate-300 dark:text-white dark:bg-gray-800  shadow-sm">
  <figure>
    <img
      src={img3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Event 4: Mountain Challenge – July 10, 2025</h2>
    <p>A challenging high-altitude marathon designed for adventure-loving runners.</p>
  </div>
</div>

{/* static card 5 */}
<div className="card bg-base-100 bg-slate-300 dark:text-white dark:bg-gray-800 shadow-sm">
  <figure>
    <img
      src={img1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Event 5: Sunset Beach Run – August 25, 2025</h2>
    <p>A unique evening marathon along the beach, ending with a beautiful sunset celebration.</p>
  </div>
</div>


{/* static card 6 */}
<div className="card bg-base-100  bg-slate-300 dark:text-white dark:bg-gray-800 shadow-sm">
  <figure>
    <img
      src={img4}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Event 6: Winter Wonderland Marathon – December 5, 2025</h2>
    <p>A magical winter marathon through snowy landscapes, offering a festive experience for runners.</p></div>
</div>

    </div>
</div>


        </div>
    );
};

export default Home;