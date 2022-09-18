import React from 'react'

interface ICountdown {
    days:number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountDownTimer = ({ days=0, hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
    

    const [time, setTime] = React.useState<ICountdown>({days, hours, minutes, seconds});
    

    const tick = () => {
   
        if (time.days ==0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) 
            reset()
       
        else if ( time.hours === 0 && time.seconds === 0 && time.minutes===0) {
            setTime({ days: time.days-1, hours: 23, minutes: 59, seconds: 59});
        } 
        else if(time.minutes === 0 && time.seconds === 0 && time.days!=0){
            setTime({ days: time.days, hours: time.hours-1, minutes: 59, seconds: 59});
        }
        else if (time.seconds === 0) {
            setTime({days: time.days, hours: time.hours, minutes: time.minutes - 1, seconds: 59});
        } else {
            setTime({days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds - 1});
        }
    };


    const reset = () => setTime({days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div className='  lg:text-2xl md:text-md sm:text-sm text-xs mt-10 lg:mt-20  md:mt-16 sm:mt-12 '>
            <p className='flex flex-row gap-[8%] md:gap-[14.38%] sm:gap-[12%] lg:gap-[11%] lg:ml-10 md:ml-10'>
            <div className=' '>Days</div> 
            <div className=''>Hours </div> 
            <div className=''>Minutes</div>
             <div className=' '>Seconds</div>   
            </p>
            <div className='lg:text-9xl md:text-8xl sm:text-5xl text-5xl font-extrabold mt-4'>
            <p>{`${time.days.toString().padStart(2, '0') }:${time.hours.toString().padStart(2, '0')}:${time.minutes
            .toString()
            .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p> 
            </div>
            
        </div>


    );
}

export default CountDownTimer;