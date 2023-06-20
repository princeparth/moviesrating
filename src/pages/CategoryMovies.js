import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { useLocation } from 'react-router-dom';
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, moviesType } from '../compoenets/Logo';
import Movieslist from '../compoenets/Movieslist';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled('img')({
  width: '100%',
  height: '450px',
});

function CatogaryMovies() {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
    };

    let API_URL;

    if (search.includes('popular')) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes('upcoming')) {
      API_URL = UPCOMING_API_URL;
    } else if (search.includes('toprated')) {
      API_URL = TOPRATED_API_URL;
    }

    getData(API_URL);
  }, [search]);

  return (
    <Box sx={{width:'80%', margin:'auto'}}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        slidesToSlide={1}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <StyledBanner src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
          </div>
        ))}
      </Carousel>
      <Box sx={{background:'#f5f5f5', marginTop:'10px'}}>
        <Typography variant='h6'>IMDb Charts</Typography>
        <Typography variant='h4' >IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
        <Typography style={{fontSize:"12px", margin:'5px'}}>IMDb Top {movies.length} as rated by regaular IMDb Voters </Typography>
        <Divider/>
        <Movieslist movies ={movies}/>
      </Box>
    </Box>
  );
}

export default CatogaryMovies;
