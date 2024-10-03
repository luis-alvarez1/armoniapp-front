import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Respiracion = () => {
  const [isBreathingIn, setIsBreathingIn] = useState(true);
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev === 0 ? 4 : prev - 1));
      if (countdown === 0) {
        setIsBreathingIn((prev) => !prev);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="text-center text-white vh-100 vw-100 pt-4 dotted">
        <div className='box bg-terciary w-50 h-75 mx-auto rounded mt-4 pt-3'>
            <h1 className="display-4 mt-3">{isBreathingIn ? 'Inhala...' : 'Exhala...'}</h1>
            <h2 className="mt-4">{countdown}</h2>
            <Link to="/home"><svg className='back-arrow' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></Link>
            <div className={`circle ${isBreathingIn ? 'inhale' : 'exhale'} mt-4`}></div>
        </div>
    </div>
  );
};

export default Respiracion;