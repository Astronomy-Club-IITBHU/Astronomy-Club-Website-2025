'use client';
import "../../globals.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import star from "../../../../public/star.png";
import pic1 from "../../../../public/Image1.JPG";
import pic2 from "../../../../public/Image7.JPG";
import pic3 from "../../../../public/Image2.png";
import pic4 from "../../../../public/Image8.JPG";
import pic5 from "../../../../public/Image5.JPG";
import pic6 from "../../../../public/Image22.png";
import pic7 from "../../../../public/Image33.JPG";
import pic8 from "../../../../public/Image4.JPG";


import backgroundImage from "../../../../public/postImages/darkSpace.jpg";
import logo from "../../../../public/Hero.png";

const HomeText = () => {
    return (
        <div className="max-w-5xl mx-auto text-center py-20 flex items-center justify-center space-x-4">
            {/* Logo */}
            <Image
                src={logo}
                alt="Yuri's Night Logo"
                width={50}
                height={50}
                className="animate-fade-in"
            />

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-Space Mono text-white drop-shadow-lg animate-fade-in">
                YURI'S NIGHT
            </h1>
        </div>
    );
};

const Introduction = () => {
    return (
        <div className="max-w-4xl mx-auto text-center text-white text-lg px-5 mb-20 animate-fade-in delay-200">
            <p className="font-['Pacifico'] text-2xl text-purple-200">
                Yuri's Night, an annual celebration commemorating Yuri Gagarin's
                historic journey into space, holds a special significance for The
                Astronomy Club IIT BHU (Varanasi). It serves as a beacon of inspiration,
                igniting curiosity and passion for astronomy among students and
                enthusiasts alike. Through engaging activities, workshops, and
                discussions, Yuri's Night offers a unique opportunity to explore the
                mysteries of the cosmos and connect with like-minded individuals.
            </p>
        </div>
    );
};

const EventCard = ({ event, index }) => {
    const handleCardClick = () => {
        alert(`You clicked on ${event.title}`);
    };

    return (
        <div
            key={index}
            className="relative p-5 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 cursor-pointer min-h-[300px] group"
            style={{
                backgroundImage: `url(${event.img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                animationDelay: `${index * 100}ms`,
            }}
            onClick={handleCardClick}
        >
            {/* Overlay now inside a group hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-30"></div>

            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-400 group-hover:text-cyan-400">
                    {event.title}
                </h3>
                <p className="text-sm mt-2 text-cyan-200 group-hover:text-white">
                    {event.desc}
                </p>
            </div>
        </div>
    );
};

const YuriNight = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const events = [
        {
            title: "Astro Talk",
            desc: "A celestial clash of intellects as contestants compete in debating astronomical topics, showcasing their knowledge and eloquence.",
            img: pic1,
        },
        {
            title: "Cosmic Script",
            desc: "Where quills meet quasars in a cosmic competition of literary prowess, as writers craft compelling articles exploring the wonders of the universe.",
            img: pic2,
        },
        {
            title: "Cosmic Canvas",
            desc: "A stellar showdown of artistic prowess, where participants vie to capture the beauty of the cosmos on canvas, blending imagination and skill in a celestial contest.",
            img: pic3,
        },
        {
            title: "Astro Quiz",
            desc: "A celestial-themed trivia competition that challenges participants' knowledge of astronomy and space exploration.",
            img: pic4,
        },
        {
            title: "Planet Hunt",
            desc: "A celestial challenge of machine learning prowess, where participants race to identify exoplanets using cutting-edge algorithms in this thrilling competition.",
            img: pic5,
        },
        {
            title: "Astro Pixels",
            desc: "Explore the universe through a cutting-edge lens, utilizing deep learning and computer vision to unlock the secrets of space within celestial images.",
            img: pic6,
        },
        {
            title: "Telescon",
            desc: "A hands-on experience in constructing your own telescope, merging education with practical astronomy, and bringing the cosmos closer to home.",
            img: pic7,
        },
        {
            title: "Pitch Beyond Earth",
            desc: "A hands-on experience in Astro-entrepreneuship based event",
            img: pic8,
        }
    ];

    return (
        <>
            {/* Custom Star Cursor */}
            <div
                className="fixed top-0 left-0 pointer-events-none"
                style={{
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                    zIndex: 1000,
                    pointerEvents: "none",
                }}
            >
                <Image
                    src={star}
                    alt="Star Cursor"
                    width={30}
                    height={30}
                    className="animate-spin-slow"
                />
            </div>

            <div
                style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                }}
            >


                <HomeText />

                {/* Introduction Section */}
                <Introduction />

                {/* Events Section */}
                <section id="events" className="p-10 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold text-purple-400 mb-5 animate-fade-in delay-200">
                        Featured Events
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
                        {events.map((event, index) => (
                            <EventCard key={index} event={event} index={index} />
                        ))}
                    </div>
                </section>

                {/* Register Section */}
                <section id="register" className="p-10 text-center">
                    <h2 className="text-3xl font-bold text-purple-400 animate-fade-in delay-300">
                        Register Now
                    </h2>
                    <p className="mt-2 text-cyan-200 animate-fade-in delay-400">
                        Join us for an unforgettable experience!
                    </p>
                    <a
                        href="https://yurisnight.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block bg-purple-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-purple-600 transition-colors animate-fade-in delay-500"
                    >
                        Register
                    </a>
                </section>
            </div>

            {/* Footer Section */}
            <footer
                id="contact"
                className="bg-black bg-opacity-70 text-white p-5 text-center relative z-10"
            >
                <p className="animate-fade-in delay-600">
                    Contact us at{" "}
                    <a href="mailto:astronomyclub.iitbhu@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                        astronomyclub.iitbhu@gmail.com
                    </a>
                </p>
            </footer>
        </>
    );
};

export default YuriNight;