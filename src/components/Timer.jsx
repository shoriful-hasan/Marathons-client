import { differenceInCalendarDays, isValid, parse } from 'date-fns';
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({ RegEndDate }) => {
//   const startDate = RegEndDate;
if (!RegEndDate) {
    return <div>Loading...</div>; // You can display a loading message or spinner here
  }
  const marathonDate = parse(RegEndDate, 'dd-MM-yyyy', new Date());
  // console.log('The ISO format is', marathonDate);
  if (!isValid(marathonDate)) {
    return <div>Invalid marathon start date</div>;
  }
  const now = new Date();


  // Check if the marathon date is in the future
  const isDateinfuture = marathonDate > now;
// console.log(`the marathonDate ${marathonDate} and the now Date is ${now}`);

  // Calculate the remaining time in seconds
  const durationInSeconds = Math.floor((marathonDate - now) / 1000);

  return (
    <div>

      {isDateinfuture ? (

       <div className='flex gap-3'>

<div className='text-center'>
    <h1>Days</h1>
<CountdownCircleTimer
        key='timer1'
        size={75}
        strokeWidth={5}
          isPlaying
          duration={durationInSeconds} // Countdown duration in seconds
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[durationInSeconds, durationInSeconds * 0.7, durationInSeconds * 0.3, 0]}
        >
          {({ remainingTime }) => {
            // Calculate days, hours, minutes, and seconds from remaining time
            const days = Math.floor(remainingTime / (24 * 60 * 60)); // Days
            

            return (
              <div>
                {days} 
              </div>
            );
          }}
        </CountdownCircleTimer>
</div>

    <div className='text-center'>
        <h1>Hours</h1>
    <CountdownCircleTimer
         key='timer2'
           isPlaying
           size={75}
           strokeWidth={5}
           duration={durationInSeconds} // Countdown duration in seconds
           colors={['#004777', '#F7B801', '#A30000', '#A30000']}
           colorsTime={[durationInSeconds, durationInSeconds * 0.7, durationInSeconds * 0.3, 0]}
         >
           {({ remainingTime }) => {
             // Calculate days, hours, minutes, and seconds from remaining time
             
             const hours = Math.floor((remainingTime % (24 * 60 * 60)) / 3600); // Hours
            
 
             return (
               <div>
                 {hours}
               </div>
             );
           }}
         </CountdownCircleTimer>
    </div>

        <div className='text-center'>
            <h1>min</h1>
        <CountdownCircleTimer
         key='timer2'
           isPlaying
           size={75}
           strokeWidth={5}
           duration={durationInSeconds} // Countdown duration in seconds
           colors={['#004777', '#F7B801', '#A30000', '#A30000']}
           colorsTime={[durationInSeconds, durationInSeconds * 0.7, durationInSeconds * 0.3, 0]}
         >
           {({ remainingTime }) => {
             // Calculate days, hours, minutes, and seconds from remaining time
           
          
             const minutes = Math.floor((remainingTime % 3600) / 60); // Minutes
          
 
             return (
               <div>
                  {minutes}
               </div>
             );
           }}
         </CountdownCircleTimer>

        </div>
        <div>
            <h1>Seconds</h1>
        <CountdownCircleTimer
         key='timer2'
           isPlaying
           size={75}
           strokeWidth={5}
           duration={durationInSeconds} // Countdown duration in seconds
           colors={['#004777', '#F7B801', '#A30000', '#A30000']}
           colorsTime={[durationInSeconds, durationInSeconds * 0.7, durationInSeconds * 0.3, 0]}
         >
           {({ remainingTime }) => {
             // Calculate days, hours, minutes, and seconds from remaining time
             const seconds = remainingTime % 60; // Seconds
 
             return (
               <div>
                {seconds}
               </div>
             );
           }}
         </CountdownCircleTimer>

        </div>
       </div>
      

      ) : (
        'Time is over'
      )}
    </div>
  );
};

export default Timer;
