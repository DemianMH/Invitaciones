import { FaRegClock, FaUtensils, FaMusic, FaBirthdayCake, FaCookieBite, FaGuitar, FaGlassCheers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Itinerary = () => {
  const events = [
    { time: '5:00pm', event: '¡La Fiesta Inicia!', icon: <FaRegClock /> },
    { time: '6:00pm', event: 'Deliciosa Cena Vaquera', icon: <FaUtensils /> },
    { time: '7:00pm', event: 'Ambiente Norteño', icon: <FaGuitar /> },
    { time: '8:30pm', event: 'Snacks y Botanas', icon: <FaCookieBite /> },
    { time: '9:00pm', event: '¡Música de Banda en Vivo!', icon: <FaMusic /> },
    { time: '10:00pm', event: 'Las Mañanitas & Candy Bar', icon: <FaBirthdayCake /> },
    { time: '10:00pm en adelante', event: '¡A Celebrar y Bailar!', icon: <FaGlassCheers /> },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4 md:p-6 bg-white rounded-2xl shadow-xl border-4 border-[#A0522D]">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-[#8B4513]">Nuestro Gran Día</h2>
      <div className="relative border-l-4 border-dashed border-[#A0522D] pl-8">
        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start mb-10 relative"
          >
            <div className="absolute -left-7 bg-[#A0522D] text-white rounded-full w-14 h-14 flex items-center justify-center mr-4 text-2xl shadow-lg border-2 border-white">
              {item.icon}
            </div>
            <div className="ml-8 text-left">
              <p className="font-extrabold text-2xl mb-1 text-[#4a2c2a]">{item.time}</p>
              <p className="text-xl text-[#6f4e37]">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;