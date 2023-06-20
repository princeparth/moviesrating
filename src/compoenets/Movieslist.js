import { List, ListItem, Typography, styled } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const Banner= styled('img')({
    width:'47px'
})

function Movieslist({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return (
          <List key={movie.id} sx={{display:'flex'}}>
            <ListItem>
              <Banner
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
              />
            </ListItem>
            <ListItem>
              <Typography>{movie.original_title}</Typography>
            </ListItem>
            <ListItem>
                <StarIcon color='warning'/>
                <Typography>{movie.vote_average}</Typography>
            </ListItem>
            <ListItem>
                <Typography>{movie.release_date}</Typography>
            </ListItem>
          </List>
        );
      })}
    </>
  );
}

export default Movieslist;
