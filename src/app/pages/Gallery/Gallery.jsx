'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import star from '../../../../public/star.png'

function Gallery({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const closeOnOverlayClick = (e) => {
    if (e.currentTarget.id === 'default-modal') {
      closeModal();
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(nextIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(prevIndex);
  };

  // Handle mouse movement to update cursor position
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

      <div className="bg-black container px-5 py-10 mx-auto" style={{ cursor: 'none' }}>
        <div className="flex flex-col text-center text-white w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black mt-4">
            Our camera roll
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
            This gallery contains pictures from our victories at
            Inter-IIT and different colleges, Alumni's meet, partying,
            orientations, workshops, and Astrophotography.
          </p>
        </div>
        <div className="columns-1 gap-0 1g:gap- sm:columns-2 lg:columns-3 xl:columns-4 [&>img: not (:first-child)]:mt-5 lg: [&>img:not (:first-child)]=mt-8">
          {images.map((src, index) => (
            <div key={index} className="p-2">
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="button"
                onClick={() => openModal(index)}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={600}
                />
              </button>
            </div>
          ))}
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className={`${isModalOpen ? 'fixed' : 'hidden'
              } overflow-y-hidden overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full`}
            onClick={closeOnOverlayClick}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <div className="relative p-16 w-full h-full flex justify-center items-center">
              {/* Modal content */}
              {selectedImageIndex !== null && (
                <div className="imgModal flex items-center h-full">
                  {/* Previous Button */}
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-4"
                    onClick={prevImage}
                  >
                    <FiChevronLeft size={80} />
                  </button>
                  {/* Image */}
                  <Image
                    className="w-full h-full object-cover"
                    src={images[selectedImageIndex]}
                    alt={`Image ${selectedImageIndex + 1}`}
                    width={800}
                    height={800}
                  />
                  {/* Next Button */}
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-4"
                    onClick={nextImage}
                  >
                    <FiChevronRight size={80} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
