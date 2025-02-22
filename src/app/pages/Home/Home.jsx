"use client"
import '../../globals.css'
import React, { useState, useEffect } from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image';
import Hero from '../../../../public/Hero.png'
import star from '../../../../public/star.png'
import ParticleEffect from '@/app/Animations/ParticleEffect';
import { motion } from "framer-motion"
import Link from 'next/link'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const heroVariants = {
  visible: {
    x: [-30, 30, -30],
    y: [-30, 30, -30],
    transition: {
      repeat: Infinity,
      delay: 0.1,
      duration: 5,
    }
  }
}
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};
const Home = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
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
      <div className='h-screen mt-[50px] bg-black flex flex-row justify-between'>
        <div className='flex ml-[100px] mt-[50px] flex-col grow'>
          <h1 className='text-white mt-[80px] text-gradient text-[30px] lg:text-[50px] md:text-[30px]'>
            <span className={roboto.className}>Step into the Wonders of the Astronomy Club!</span>
          </h1>
          <div className='mt-[20px]'>
            <p className='text-white text-[10px] lg:text-[25px] md:text-[20px]'>
              <span className={roboto.className}>Unveiling the Mysteries of the Universe,</span>
            </p>
            <p className='text-white text-[10px] lg:text-[25px] md:text-[20px]'>
              <span className={roboto.className}>We are the <span className='text-gradient font-bold'>Astronomy</span> club of IIT BHU.</span>
            </p>
          </div>

          <Link href='/pages/Activities'>
            <button className='bg-gradient-to-r from-white to-slate-400 rounded-[5px] w-[130px] mt-[40px] px-[3px] py-[5px]'>
              <span className={roboto.className}><span className='font-bold text-[20px]'>Explore</span></span>
            </button>
          </Link>
          <br></br>
          <p className='text-white text-[15px] lg:text-[25px] md:text-[20px]'>
            <span className={roboto.className}>Who Are We?</span>
          </p>
          <p className='mt-[20px] text-white text-[18px] lg:text-[15px] md:text-[100px]'>
            <span className={roboto.className}>The Astronomy Club, IIT (BHU) Varanasi, is a passionate <br />community of space enthusiasts, and aspiring astrophysicists <br />who love exploring the mysteries of the cosmos.<br /> We explore the universe through observational sessions,<br /> astrophotography, workshops and discussions on celestial phenomena.<br /> Our club provides a platform for those students who are interested<br /> in astronomy and wanted to explore it by engaging in hands-on <br />activities like observational sessions, and research projects in astrophysics.<br /> Whether you are a seasoned astronomer or just curious about <br />the night sky, the Astronomy Club welcomes all who is curious<br /> about the vast and beautiful universe. <br />Join us as we reach for the stars! 🌌
            </span>
          </p>
          <br></br>
        </div>

        <div className='flex items-center justify-center h-screen container w-[45vw] mr-[70px]'>
          <div className='bg-particle'>
            <ParticleEffect />
          </div>
          <motion.div
            className='image-hero'
            variants={heroVariants}
            animate="visible"
          >
            <Image src={Hero} height={300} width={300} alt="hero" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className='mt-[50px] bg-black justify-between'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className='flex ml-[100px] mt-[50px] grow'>
          <br></br>
          <p className='text-white text-[10px] lg:text-[25px] md:text-[20px]'>
            <span className={roboto.className}>What Do We Do?</span>
          </p>
          <motion.ul
            className='mt-[10px] md:text-1px] text-white list-disc ml-[100px] mr-[150px] text-[50px] lg:text-[15px]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {[
              "🔭 Observational Sessions - We regularly organize night sky observation events where members can observe planets, star clusters, nebulae, and galaxies through high-powered telescopes.These sessions help students understand celestial navigation, constellations, and real-time  astronomical phenomena like eclipses, meteor showers, and planetary transits.",
              "📷 Astrophotography - We capture breathtaking images of celestial objects, including the Moon, planets, and deep-space objects like nebulae and galaxies. Members learn image processing and the use of specialized equipment to document the beauty of the cosmos.",
              "🚀 The Rocket Team -  Our team works on designing, simulating, and launching model rockets, experimenting with aerodynamics, propulsion systems, and payloads. We conduct hands-on sessions where students build and test their own rockets, applying fundamental physics and engineering concepts.",
              "🛰 Satellite Team - We research and develop small satellite projects, focusing on CubeSats. Members get to work on hardware design, software programming, and real-world space applications, preparing them for future opportunities in space technology and exploration."
            ].map((text, index) => (
              <motion.li key={index} className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Scrolling Marquee */}
      <div className=' mt-[50px] bg-gradient-to-r from-black-500 to-green-500 p-[10px]'>
        <marquee className='text-white font-bold text-[20px]'>
          Welcome to the Astronomy Club! Join us in exploring the universe with exciting events and activities.
        </marquee>
      </div>
      <div
        className='fixed top-0 left-0 pointer-events-none'
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 1000,
        }}
      >
        <Image src={star} alt="Star Cursor" width={30} height={30} />
      </div>
    </>
  )
}

export default Home
