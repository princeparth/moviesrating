import React from 'react';
import { Box, Typography, styled } from '@mui/material';


const Poster = styled('img')({
    width:'30%',
    height:'13%',
    display:"flex",
    flexDirection:'column',
    alignItems:'baseline',
    paddingLeft:'20px',
    
    

    
})

function UpNext({ movies }) {
  return (
    <Box className="box">
      <Typography  className='typo'sx={{color:"#F5C518",fontWeight:'600',fontSize:'18px',marginBottom:'10px',paddingRight:'200px'}}>Up Next</Typography>
      {movies.slice(0,3).map((movie) => (
        <React.Fragment key={movie.id} >
            <Box  className='pos' >
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
          />
          <Typography className='type'>{movie.original_title}</Typography>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default UpNext;
