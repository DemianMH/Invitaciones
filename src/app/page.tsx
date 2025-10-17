"use client";

import { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaPause, FaPlay } from 'react-icons/fa';
import BirthdayCountdown from '@/components/Countdown';
import Itinerary from '@/components/Itinerary';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Page() {
  const whatsappNumber = "3318289318";
  const message = "Hola, confirmo mi asistencia al cumpleaños número 30 de César Adrián. ¡Allí estaré!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Nuevo estado para la pantalla de bienvenida
  const [showWelcome, setShowWelcome] = useState(true);

  // Función para entrar a la invitación y activar la música
  const handleEnter = () => {
    setShowWelcome(false); // Oculta la pantalla de bienvenida
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log("Error al reproducir audio:", error));
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Error al reproducir audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/musica_vaquera.mp3" loop preload="auto" />

      {/* Pantalla de Bienvenida */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 bg-black bg-opacity-80 z-[100] flex flex-col items-center justify-center text-white">
            <div className="text-center p-8">
              <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 text-yellow-300">¡Estás Invitado!</h1>
              <p className="text-xl md:text-2xl mb-8">Al cumpleaños de César Adrián</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleEnter}
                className="bg-[#8B4513] text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg"
              >
                Ver Invitación
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Botón de música (solo visible después de entrar) */}
      {!showWelcome && (
          <motion.button
            className="fixed bottom-4 right-4 bg-[#8B4513] text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#A0522D] transition-colors"
            onClick={togglePlayPause}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </motion.button>
      )}

      {/* Contenido principal de la invitación */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/hero-banner-vaquero.jpg"
          alt="Fondo Vaquero de Cumpleaños"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="z-0 animate-zoom-in"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col items-center justify-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-6xl md:text-8xl font-bold font-serif mb-4 drop-shadow-lg text-yellow-300"
          >
            ¡César Adrián
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-4xl md:text-6xl font-bold font-serif mb-6 drop-shadow-lg text-white"
          >
            Cumple 30!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center text-2xl md:text-3xl font-cursive mb-8 italic"
          >
            ¡Prepárate para una fiesta al estilo vaquero!
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto p-4 md:p-8 text-center relative z-20 bg-wood-pattern">
        {/* El resto del código de tu invitación sigue aquí... */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="my-10 flex justify-center"
        >
            <Image src="/images/lazo-divisor.png" alt="Divisor de Lazo" width={150} height={50} objectFit="contain" />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="my-16 p-6 md:p-10 bg-gradient-to-br from-[#d4af37] to-[#8B4513] text-white rounded-xl shadow-lg transform hover:scale-105 transition-transform"
        >
          <h2 className="text-4xl font-extrabold mb-8">Faltan</h2>
          <BirthdayCountdown />
        </motion.section>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="my-10 flex justify-center"
        >
            <Image src="/images/lazo-divisor.png" alt="Divisor de Lazo" width={150} height={50} objectFit="contain" />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="my-16 p-6 md:p-10 bg-[#f8f0e3] rounded-xl shadow-lg border-2 border-[#8B4513]"
        >
          <Itinerary />
        </motion.section>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="my-10 flex justify-center"
        >
            <Image src="/images/lazo-divisor.png" alt="Divisor de Lazo" width={150} height={50} objectFit="contain" />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="my-16 p-6 md:p-10 bg-[#e0c2a7] rounded-xl shadow-lg text-[#4a2c2a]"
        >
          <h2 className="text-4xl font-bold mb-6">¿Cuándo y Dónde?</h2>
          <p className="text-2xl mb-4 font-semibold">¡Sábado, 2 de Noviembre de 2025!</p>
          <a
            href="https://share.google/eXB9G62PcteF7huuD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#8B4513] text-white font-bold py-3 px-6 rounded-full hover:bg-[#A0522D] transition-colors text-xl shadow-md"
          >
            <FaMapMarkerAlt className="mr-3 text-2xl" />
            Ver Ubicación en Google Maps
          </a>
          <p className="mt-6 text-lg italic">¡Te esperamos para celebrar en grande!</p>
        </motion.section>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="my-10 flex justify-center"
        >
            <Image src="/images/lazo-divisor.png" alt="Divisor de Lazo" width={150} height={50} objectFit="contain" />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="my-16 p-6 md:p-10 bg-green-700 text-white rounded-xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">¡No Faltes! Confirma tu Asistencia</h2>
          <p className="mb-8 text-xl">Tu presencia es el mejor regalo para César Adrián.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white font-extrabold py-4 px-8 rounded-full hover:bg-green-600 transition-all text-2xl shadow-lg transform hover:scale-105"
          >
            <FaWhatsapp className="mr-4 text-3xl" />
            Confirmar por WhatsApp
          </a>
          <p className="mt-8 text-lg italic">¡Te esperamos para hacer de esta fiesta algo inolvidable!</p>
        </motion.section>
      </main>
    </>
  );
}