"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import photos from '../../../../public/avtaar.png';
import photo1 from '../../../../public/shlok_secy.png';
import photo2 from '../../../../public/raj_jtsecy.png';
import photo3 from '../../../../public/ankesh_jtsecy.png';
import photo4 from '../../../../public/manash_secy.png';
import photo5 from '../../../../public/yuvraj_jtsecy.png';
import photo6 from '../../../../public/prayash_jtsecy.png';
import photo7 from '../../../../public/aditya_secy.jpg';
import photo8 from '../../../../public/jtsecy1.jpg';
import photo9 from '../../../../public/jtsecy2.jpg';
import { motion } from "framer-motion";
import star from '../../../../public/star.png';
import backgroundImage from "../../../../public/postImages/darkSpace.jpg";

const teamMembers = {
    2025: [
        { name: "Raj Singh", designation: "Joint Secretary", photo: photo2 },
        { name: "Shlok Saxena", designation: "Secretary", photo: photo1 },
        { name: "Ankesh Ansh", designation: "Joint Secretary", photo: photo3 }
    ],
    2024: [
        { name: "Yuvraj Singh", designation: "Joint Secretary", photo: photo5 },
        { name: "Manash Kumar", designation: "Secretary", photo: photo4 },
        { name: "Prayash Dash", designation: "Joint Secretary", photo: photo6 }
    ],
    2023: [
        { name: "Suraj Patil", designation: "Joint Secretary", photo: photo8 },
        { name: "Aditya Surana", designation: "Secretary", photo: photo7 },
        { name: "Pratyush Singh", designation: "Joint Secretary", photo: photo9 }
    ],
    2021: [
        { name: "Paranjay Garg", designation: "Joint Secretary", photo: photos },
        { name: "Preety Sarwa", designation: "Secretary", photo: photos },
        { name: "Harsh Pandey", designation: "Joint Secretary", photo: photos }
    ],
    // Add more years and team members as needed
};

const Team = () => {
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
        <div className="team-container p-6 relative">
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
            <div
                style={{
                    backgroundImage: `url(${backgroundImage.src})`, // Ensure this path is correct
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Heading */}
                <motion.h1
                    className="text-4xl font-bold mb-6 mt-20 text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Our Current Secretaries
                </motion.h1>
                {Object.keys(teamMembers).sort((a, b) => b - a).map((year) => (
                    <div key={year} className="year-section mb-12">
                        <h1 className="text-4xl font-bold text-center mb-6 mt-20 text-white">Team {year - 1}-{year - 2000}</h1>
                        <div className="flex flex-wrap justify-center gap-6">
                            {teamMembers[year].map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="team-member flex flex-col items-center text-center border rounded-lg p-4 bg-white shadow-md"
                                    initial={{ opacity: 0, y: 20 }} // Initial state: off-screen and transparent
                                    animate={{ opacity: 1, y: 0 }} // Final state: fully visible and centered
                                    transition={{ duration: 0.6, delay: index * 0.1 }} // Delay staggered animation for each item
                                >
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover mb-4"
                                        width={128}
                                        height={128}
                                    />
                                    <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                                    <p className="text-md text-gray-600">{member.designation}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
