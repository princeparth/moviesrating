import { Typography, styled } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  

function Slide({movies}) {
  return (
    <>
    <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        slidesToSlide={1}
        >
            {
                movies.map(movie =>(
                    <>
                    <img className='banner' src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='banner'/>
                    <Typography className='tit'>{movie.original_title}</Typography>
                    </>
                ))
            }
        </Carousel>
    
    </>
  )
}

export default Slide