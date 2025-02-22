"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HornAntennaImage from '../../../../public/horn.png';
import PlanetariumImage from '../../../../public/planetarium2.jpg';
import rocketImage from '../../../../public/rocket.png';
import ObservatoryImage from '../../../../public/observatory.png';
import SatelliteTrackerImage from '../../../../public/satelite.jpg';
import CubeSatImage from '../../../../public/cubesat.png';
import star from '../../../../public/star.png';

//first
// import { initializeApp } from "firebase/app";
// import {getFirestore, collection , doc, setDoc, getDocs} from "firebase/firestore";
// import {Client, Storage} from "appwrite";
// import { firebaseConfig, appwrite_pid } from "@/app/config";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const client = new Client();
// client.setEndpoint('https://cloud.appwrite.io/v1').setProject(appwrite_pid);
// const storage = new Storage(client);

// let projects = [];

// async function loadProjects(){
//     let counter = 1;
//     const snap = await getDocs(collection(db,"projects"));
//     snap.forEach((doc)=>{
//         const datap = doc.data();
//         counter++;
//         let imgf = false;
//         if(counter&1){
//             imgf=true;
//         }
//         const pimg = storage.getFilePreview('67840116003980398e18',`project-${counter-1}`);
//         const title = datap.title;
//         const des = datap.description;
//         const pobj = {
//             title:title,
//             image:pimg,
//             description:des,
//             imageFirst:imgf
//         }
//         projects.push(pobj);
//     });
// }
// loadProjects();


const projects = [
    {
        title: "CubeSat",
        image: CubeSatImage,
        description: "We have developed a rudimentary CanSat with a video camera to demonstrate the working of electronic sensing components and basic heating system at upper atmosphere conditions. It can carry out gas sensing , temperature and pressure measurements.",
        imageFirst: true
    },
    {
        title: "Planetarium",
        image: PlanetariumImage,
        description: "A visionary project that aims to immerse individuals in the enchanting darkness of the night sky, fostering a deep appreciation for space exploration among enthusiasts.he planetarium helps in attracting people towards amateur astronomy. The planetarium serves the purpose of observing the night sky of Varanasi as well as other regions of the world regardless of weather conditions and time of the day. The planetarium will have an occupancy of 15-20 people. Its major application will be to conduct observational sessions.",
        imageFirst: false
    },
    {
        title: "Horn Antenna",
        image: HornAntennaImage,
        description: "Radio astronomy is a major field in observational and computational astronomy. There are many types of antennae to observe radio waves, the most basic of which is Horn Antenna. To encourage advanced astronomy in the institute, the Astronomy Club is developing its own horn antenna to capture radio wave frequencies and explore the radio frequency observation domain. By constructing an efficient and sustainable telescope using metal sheets, we aim to advance our capabilities in radio astronomy observations and unlock new insights into the universe's electromagnetic spectrum.",
        imageFirst: true
    },
    {
        title: "Rocket Team",
        image: rocketImage,
        description: (
            <>
                Each component, from the sturdy body to the nozzle, was made with care. As it soared into the sky, propelled by the power of science and ingenuity, we witnessed the culmination of our efforts.{" "}
                <a href="https://rocket-team-iit-varanasi.github.io/website/" target="_blank" rel="noopener noreferrer" className="text-white-400 underline">
                    Know more about us here
                </a>
            </>
        ),
        imageFirst: false
    },
    {
        title: "Maan Singh Observatory, Varanasi",
        image: ObservatoryImage,
        description: "Ancient observatories are an important tool to understand the foundations of Astronomy, about how ancient cultures found a connection between astronomy and nature. In an endeavor to explore the significance of these structures and how they impacted astronomy as we know it, the students of the Astronomy Club of IIT BHU undertook an activity at the Man Singh Observatory in Varanasi, India. Various solar parameters including the local solar time, azimuth, declination, and hour angles were calculated using measurements taken from instruments at the observatory.",
        imageFirst: true
    },
    {
        title: "Satellite Tracker",
        image: SatelliteTrackerImage,
        description: "Our team has developed a fully functional satellite tracker through tireless dedication and commitment. This sophisticated tool aligns with our overarching goals, empowering us to explore the cosmos with precision and efficiency. With its capabilities, we can delve deeper into our pursuits & unlock new insights into the mysteries of space.",
        imageFirst: false
    },

];

const Projects = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update cursor position on mouse movement
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
        <div className="projects-container px-5 py-4 relative">
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
                Club Projects
            </motion.h1>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className={`project-item flex ${project.imageFirst ? 'flex-row' : 'flex-row-reverse'} mb-8`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex-1 flex items-center justify-center">
                        <Image src={project.image} alt={project.title} height={400} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center px-4 text-white">
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p className="text-lg">{project.description}</p>
                    </div>
                </motion.div>
            ))}
        </div >
    );
};

export default Projects;
