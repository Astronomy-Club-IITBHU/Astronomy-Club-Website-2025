'use client';
import React from 'react';
import Image from 'next/image';

const MyComponent = (props) => {
  const { title, author, slug, description, date, category, image, writer, heading, text, onClose } = props;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fullscreen-overlay">
      <button onClick={handleClose} className="close-button">
        Close
      </button>
      {/* <div className="content">
        <h2 style={{ color: 'white', fontSize: '50px' , alignContent: 'center'}}>{title}</h2> */}
      {/* <Image
        src={image}
        alt={title}
        width={300} // Set the desired width
        height={200} // Set the desired height
      /> */}
      {/* <p style={{ color: 'whitesmoke' , fontSize: '40px' , alignContent: 'center'}} className='ptag'>Description:</p>
        <br></br>
        <p style={{ color: 'whitesmoke' , fontSize: '40px' , alignContent: 'center'}} className='ptag'>{disc}</p>
      </div> */}

      <div class="blog-container">
        <div class="blog-header">
          <h1 class="blog-title">Title: {title}</h1>
          <p class="blog-author">Author: {author}</p>
        </div>

        <p class="blog-description">Description: {description}</p>

        <p class="blog-date">Published on: {date}</p>
        <p class="blog-category">Category: {category}</p>

        <img src={image} alt="Blog Image" class="blog-image"></img>

        <div class="blog-content">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
