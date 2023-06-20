import React, { useEffect, useState } from 'react'
import { catergoryMovies } from '../services/Api';
import { NOWPLAYING_API_URL } from '../compoenets/Logo';
import { Box } from '@mui/material';
import Banner from '../compoenets/Banner';
import UpNext from '../compoenets/UpNext';
import Slide from '../compoenets/Slide';
import '../Styles/Styles.css';

function Home() {
    const [movies, setMovies] = useState([]);


    useEffect(()=>{
        const getData = async() =>{
            let response = await catergoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    })
  return (
    <>
    
    <Box sx={{display:'flex'}}>
        <Banner movies={movies}/>
        <UpNext movies={movies}/>
    </Box>
    <Slide movies={movies}/>
    <Slide movies={movies}/>
    
    
    
    
    </>
  )
}

export default Home