"use client";

import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

// Definimos una interfaz para los props que recibe la función renderer
interface CountdownRenderProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const BirthdayCountdown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const birthdayDate = new Date('2025-11-02T17:00:00'); 

  // Usamos la interfaz que definimos en lugar de 'any'
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span className="text-3xl md:text-4xl font-bold text-yellow-200">¡El gran día ha llegado!</span>;
    } else {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md"
          >
            <p className="text-5xl md:text-6xl font-extrabold">{days}</p>
            <span className="text-xl md:text-2xl mt-2">Días</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md"
          >
            <p className="text-5xl md:text-6xl font-extrabold">{hours}</p>
            <span className="text-xl md:text-2xl mt-2">Horas</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md"
          >
            <p className="text-5xl md:text-6xl font-extrabold">{minutes}</p>
            <span className="text-xl md:text-2xl mt-2">Minutos</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md"
          >
            <p className="text-5xl md:text-6xl font-extrabold">{seconds}</p>
            <span className="text-xl md:text-2xl mt-2">Segundos</span>
          </motion.div>
        </div>
      );
    }
  };

  return (
    <>
      {isClient && <Countdown date={birthdayDate} renderer={renderer} />}
    </>
  );
};

export default BirthdayCountdown;