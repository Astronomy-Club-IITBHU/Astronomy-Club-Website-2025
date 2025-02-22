'use client'

import React, { useEffect, useState } from 'react';
import events_data from './data';
import EventCard from '@/app/Components/EventCard';
import Image from 'next/image';
import { motion } from "framer-motion";
import star from '../../../../public/star.png';

const containerStyle = {
  margin: '60px 150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'none'
};

const headingStyle = {
  fontSize: '24px'
};

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
      {/* Custom Star Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 1000,
        }}
      >
        <Image src={star} alt="Star Cursor" width={30} height={30} />
      </div>
      <motion.h1
        className="text-4xl font-bold mb-6 mt-20 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Events and Activities
      </motion.h1>
      <div style={containerStyle}>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-10'>
          {events_data.map((event, index) => (
            <motion.div
              key={event.title}
              className="event-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
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
