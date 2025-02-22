"use client"
import '../../globals.css'
import { Roboto } from 'next/font/google'
import Image from 'next/image';
import AchievementIcon from '../../../../public/trophy2.png'
import star from '../../../../public/star.png'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})
const interiit = [
    {
        title: 'Gold in HBCSE, RIFR',
        description: 'No Prep: Astronomy',
        date: '2024',
    },
    {
        title: '4th place in ISRO event',
        description: 'High Prep : Astronomy',
        date: '2024',
    }
]
const nssc2023 = [
    {
        title: 'First Place in Cosmomath',
        description: 'Team: Hardik Sharma, Aarav Mehta',
        date: 'October 2023',
    },
    {
        title: 'Second Place in Asteroid Venture',
        description: 'Team: Shashank Shekhar Singh, Debangi Ghosh',
        date: 'October 2023',
    },
    {
        title: 'Third Place in Case Study',
        description: 'Team : Yasvardhan, Sanyam Jain',
        date: 'October 2023',
    }
]
const nssc2022 = [
    {
        title: 'First Place in Case Study',
        description: 'Team : Manash Kumar, Prayash Dash & Sushil',
        date: 'October 2022',
    },
    {
        title: 'Second Place in Cosmomath',
        description: 'Team: Sanskar Singh & Abhay',
        date: 'October 2022',
    }
]
const nssc2021 = [
    {
        title: 'Second Place in Case Study',
        description: 'Team: Neeraj Kamal, Pratyush Singh & Praveen Kumar',
        date: '2021',
    }
]
const Anvesha = [
    {
        title: 'First Place in BAHfest',
        description: 'Team: Moulik Deviprasad Ketkar',
        date: '2021',
    }
]
const astrochamp = [
    {
        title: 'First Place in Case Study',
        description: 'Team: Preety, Harsh, Atharv, Preksha, Adrija, Manish, Pratyush, Utkarsh, Jashandeep & Varun',
        date: '2021',
    },
    {
        title: 'Second place in Graphic Designing',
        description: 'Team: Prince',
        date: '2021',
    }
]
const iaac = [
    {
        title: 'Gold Honour and Top 1% of all participants',
        description: 'Team: Pratyush ',
        date: '2021',
    }
]
const astrax = [
    {
        title: '1st place in Astrophotography event',
        description: 'Team Shooting star: Amit Kumar Baheti',
        date: '2020',
    }
]
const nssc2019 = [
    {
        title: 'Second place in Case Study',
        description: 'Team: Yash Vinod & Vaibhav Singh',
        date: '2019',
    },
    {
        title: 'Third place in Case Study',
        description: 'Team: Vamsi Bodaballa & Aditya Keshari',
        date: '2019',
    },
    {
        title: 'First place in The Science of Paper Folding',
        description: 'Team: Arjeet Dewanagan & Anmol Saluja',
        date: '2019',
    },
    {
        title: 'Third place in The Science of Paper Folding',
        description: 'Team: Yash Vinod & Vaibhav Singh',
        date: '2019',
    }
]
const nssc2018 = [
    {
        title: 'First place in Case Study',
        description: 'Team: Ayush Kumar Singh & Srishti Singh',
        date: '2018',
    },
    {
        title: 'Second place in The Science of Paper Folding',
        description: 'Team: Yash Vinod & Vaibhav Krishna',
        date: '2018',
    },
    {
        title: 'Third place in Designeer',
        description: 'Team: Rahul Vishwakarma, Pranjal & Yash Agarwal',
        date: '2018',
    },
]


const Achievements = () => {
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

        <div className='min-h-screen bg-gray-900 p-[50px] pb-[100px]'
            style={{
                backgroundImage: "url('../../../static/bcg.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

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
            {/* Heading */}
            <motion.h1
                className="text-4xl font-bold mb-6 mt-20 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Our Winners
            </motion.h1>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>Inter-IIT Tech Meet 13.0 </span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {interiit.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'23 - IIT Kharagpur </span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2023.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'22 - IIT Kharagpur </span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2022.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'21 - IIT Kharagpur </span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2021.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Anvesha Section */}
            <div>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>Anvesha'21 - IISER TVM</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {Anvesha.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Astrochamp Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}> Astrochamp'21 - IIT Bhubaneswar</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {astrochamp.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IAAC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>IAAC'21</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {iaac.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Astrax Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>Astrax'20 - IIT Mandi</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {astrax.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'19 - IIT Kharagpur</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2019.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NSSC Section */}
            <div className='mb-[50px]'>
                <h1 className='text-white text-[40px] mb-[30px]'>
                    <span className={roboto.className}>NSSC'18 - IIT Kharagpur</span>
                </h1>
                <div className='flex flex-wrap gap-[20px]'>
                    {nssc2018.map((achievement, index) => (
                        <div key={index} className='bg-gray-800 rounded-[10px] p-[20px] w-[300px] text-white shadow-lg'>
                            <div className='flex items-center mb-[10px]'>
                                <Image src={AchievementIcon} alt="Achievement Icon" width={40} height={40} className='mr-[10px]' />
                                <h2 className='text-[20px] font-bold'>{achievement.title}</h2>
                            </div>
                            <p className='text-[15px] mb-[10px]'>{achievement.description}</p>
                            <p className='text-[12px] text-gray-400'>{achievement.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Achievements
