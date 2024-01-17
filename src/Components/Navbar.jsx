import * as React from 'react';
import {  Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import '../App.css';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';



const pages = ['Home', 'Contact', 'About', 'Sign Up'];



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar id='nav-styles' position="static">
      <Container id="nav-container" maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
          className='Exclusive-text'
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#F67007',
              textDecoration: 'none',
            }}
          >
            Exclusive
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className='nav-items' textAlign="center"><Link to={"/" + page.split(" ").join("")}>{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#F67007',
              textDecoration: 'none',
            }}
          >
            Exclusive
          </Typography>
          <Box className="navbar" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={"/" + page.split(" ").join("")}>{page}</Link>
              </Button>
            ))}
          </Box>
            
        
           <Box>
            <FormControl  sx={{ m: 1, width: '25ch', display: {xs:'none', md:'flex'} }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                />
            </FormControl>
           </Box>
           <Box>
            <FormControl  sx={{ m: 1, width: '12ch',
                                '&:focus': {
                                    width: '20ch',
                                }, display: {xs:'flex', md:'none'} }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                />
            </FormControl>
           </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

