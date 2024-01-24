
import './signup.css'
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ResponsiveAppBar from './Navbar';


function Login() {
    return (
    <Box>   
        <ResponsiveAppBar />
        <Box className='signup-box'>
            <img src='../assets/signup.png' alt=''></img>
            <Box className='signup-right-box'>
                <form method="post">
                    <Box>Log in to Exclusive</Box>
                    <Box>Enter your details below</Box>
                    <input type="text" placeholder='Email or Phone Number' />
                    <input type="text" placeholder='Password' />
                    <Button type='submit'>Log in</Button>
                    <Link to="/">Forgot password</Link>
                </form>
            </Box>
        </Box>
    </Box> 
    );
}


export default Login;