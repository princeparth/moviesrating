import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MovieIcon from '@mui/icons-material/Movie';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import '../Styles/Styles.css';
import { logourl } from "../compoenets/Logo";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
 

const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className="bt">
      <MovieIcon sx={{color:'goldenrod'}}/>
      <Typography 
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 , cursor:'pointer'}}
      >
        <span onClick={()=> navigate('/')}>MoviesRating</span>
      </Typography>
      </Box>
      <Divider />
      <ul className="mobile-navigation">
        
        <li>
          <NavLink to={`${'/categories'}?category=popular`}>Popular</NavLink>
        </li>
        <li>
          <NavLink to={`${'/categories'}?category=toprated`}>Top Rated</NavLink>
        </li>
        <li>
          <NavLink to={`${'/categories'}?category=upcoming`}>Upcoming</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }} position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box className='bts'>
            <MovieIcon sx={{color:'goldenrod'}}/>
            <Typography 
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor:'pointer' }}
            >
              <span onClick={()=> navigate('/')}>MoviesRating</span>
            </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block",  } }}>
              <ul className="navigation-menu">
          
        <li>
          <NavLink to={`${'/categories'}?category=popular`}>Popular</NavLink>
        </li>
        <li>
          <NavLink to={`${'/categories'}?category=toprated`}>Top Rated</NavLink>
        </li>
        <li>
          <NavLink to={`${'/categories'}?category=upcoming`}>Upcoming</NavLink>
        </li>
      </ul>
    </Box>
              
            
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;