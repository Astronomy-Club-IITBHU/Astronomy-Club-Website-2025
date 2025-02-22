"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MenuIcon from '../../../public/menubar.png'
import AstroLogo from '../../../public/astro-logo-white.png'

const Header = () => {

  const [menuState, setmenuState] = useState(false);



  return (

    <>
      <div className=' h-[50px] flex flex-row  bg-black justify-between fixed z-10 items-center top-0 w-full' >
        <div className=' flex w-[10%] font-bold text-white justify-center items-center lg:mx-[40px] md:mx-[30px] sm:mx-[20px] mx-[20px]'>
          <Image src={AstroLogo} alt="logo" height={30} width={60}>

          </Image>
        </div>

        <div className='flex justify-end  h-[50px]  items-center lg:mx-[100px] md:mx-[70px] sm:mx-[50px] mx-[30px]'>
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] sm:flex items-center justify-center '>
            <Link href='/pages/Home'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Home
              </button>
            </Link>
          </div>
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] sm:flex items-center justify-center '>
            <Link href='/pages/YuriNight'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Yuri's Night
              </button>
            </Link>
          </div>
          {/* <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] sm:flex items-center justify-center'>
            <Link href='/pages/Blogs'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Blogs
              </button>
            </Link>
          </div> */}
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] sm:flex items-center justify-center '>
            <Link href='/pages/Projects'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Projects
              </button>
            </Link>
          </div>
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px]  sm:flex items-center justify-center'>
            <Link href='/pages/Activities'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Activities
              </button>
            </Link>
          </div>
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px]  sm:flex items-center justify-center'>
            <Link href='/pages/Gallery'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Gallery
              </button>
            </Link>
          </div>
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] sm:flex items-center justify-center '>
            <Link href='/pages/Achievements'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Achievements
              </button>
            </Link>
          </div>
          <div className='hidden lg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px] sm:flex items-center justify-center '>
            <Link href='/pages/Team'>
              <button className='hover:font-bold transition-transform transform hover:scale-110 text-white'>
                Our Team
              </button>
            </Link>
          </div>
          <div className='sm:hidden flex '>

            <button onClick={() => {
              setmenuState(!menuState);
            }

            }>
              <Link href='/'><Image src={MenuIcon} alt='null' width={20} height={20} /></Link>
            </button>

          </div>

        </div>
      </div>

      {menuState ? (
        <div className='flex flex-col bg-white mt-[100px] justify-start items-center gap-[30px] sm:hidden '>
          <div>
            <Link href='/pages/Home'>
              <button onClick={() => {
                setmenuState(!menuState);
              }

              } className='hover:font-bold transition-transform transform hover:scale-110 text-black'>
                Home
              </button>
            </Link>
          </div>
          <div>
            <Link href='/pages/YuriNight'>
              <button onClick={() => {
                setmenuState(!menuState);
              }

              } className='hover:font-bold transition-transform transform hover:scale-110 text-black'>
                Yuri's Night
              </button>
            </Link>
          </div>
          <div>
            <Link href='/pages/Blogs'>
              <button onClick={() => {
                setmenuState(!menuState);
              }

              } className='hover:font-bold transition-transform transform hover:scale-110 text-black'>
                Blogs
              </button>
            </Link>
          </div>
          <div>
            <Link href='/pages/Activities'>
              <button onClick={() => {
                setmenuState(!menuState);
              }

              } className='hover:font-bold transition-transform transform hover:scale-110 text-black'>
                Activities
              </button>
            </Link>
          </div>
          <div>
            <Link href='/pages/Gallery'>
              <button onClick={() => {
                setmenuState(!menuState);
              }

              } className='hover:font-bold transition-transform transform hover:scale-110 text-black'>
                Gallery
              </button>
            </Link>
          </div>
        </div>)
        : (<></>)}
    </>
  )
}

export default Header