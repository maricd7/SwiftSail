import React from 'react'
import Image from 'next/image' ; 
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

export const Slider = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'auto',
        height: '400px',
        backgroundRepeat:'no-repeat',
      }
    const slideImages = [
        {
          url: '/static/slider1.png',
          caption: 'Slide 1'
        },
        {
          url: '/static/slider1.png',
          caption: 'Slide 2'
        },
        {
          url: '/static/slider1.png',
          caption: 'Slide 3'
        },
      ];
  return (
    <div>
         <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}
