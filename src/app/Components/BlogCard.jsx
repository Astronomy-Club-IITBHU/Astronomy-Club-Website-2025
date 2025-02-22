"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';
import MyComponent from '../pages/Blog/blog';
import { useState } from 'react';
import '../../style.css'; // Import the CSS file

export default function BlogCard(props) {
    console.log(props.title);
    const { title, author, slug, description, date, category, image, writer, heading, text } = props;
    const [showComponent, setShowComponent] = useState(false);

    const handleButtonClick = () => {
        setShowComponent(!showComponent);
    };
    return (
        <div style={{marginTop : 50 }}>  
            <button onClick={handleButtonClick} style={{display: "flex", justifyContent:'center'}}>
                <Card sx={{
                    alignItems : 'center',
                    display: 'flex',
                    width: 1500, // Adjust the maximum width as needed
                    height: 250,
                    maxWidth: 0.9, // Adjust the minimum width as needed
                }} className='rounded-xl'>
                    <CardActionArea sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            height={140} // Set a fixed height for the image
                            image={image}
                            alt={`Image : ${title}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </button>
            {showComponent
                && (
                    <MyComponent
                        {...props} onClose={handleButtonClick}
                    />
                )
            }
        </div>
    );
}


