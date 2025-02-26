'use client'

import React, { useEffect, useState } from 'react';
import events_data from './data';
import EventCard from '@/app/Components/EventCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import star from '../../../../public/star.png';

const Activities = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 1000,
        }}
      >
        <Image
          src={star}
          alt="Star Cursor"
          width={cursorPosition.x > 800 ? 40 : 20}
          height={cursorPosition.x > 800 ? 40 : 20}
        />
      </div>

      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Our Events and Activities
      </motion.h1>

      <div className="container mx-auto px-4 sm:px-8 mt-12">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 w-full">
          {events_data.map((event, index) => (
            <motion.div
              key={event.title}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <EventCard
                title={event.title}
                image={event.img}
                disc={event.desc}
                link={event.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Activities;
