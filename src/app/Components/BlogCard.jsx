"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogCard(props) {
  const { title, description, image, link } = props;

  return (
    <div style={{ marginTop: 30, width: '100%', display: 'flex', justifyContent: 'center' }}>
      {/* Wrap entire card inside a Link */}
      <Link href={link} passHref target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens
            alignItems: 'center',
            width: '90%',
            maxWidth: 1200,
            height: { xs: 'auto', sm: 250 }, // Adjust height on smaller screens
          }}
          className="rounded-xl"
        >
          <CardActionArea sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: '100%' }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: '100%', sm: '60%' }, // Full width on small screens, 60% on larger screens
                height: { xs: 200, sm: '100%' }, // Adjust height for responsiveness
                objectFit: 'cover',
              }}
              image={image}
              alt={`Image: ${title}`}
            />
            <CardContent sx={{ width: { xs: '100%', sm: '40%' }, textAlign: 'left' }}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
