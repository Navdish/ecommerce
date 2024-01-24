import signimage from '../assets/signup.png';
import './signup.css'
import Box from '@mui/system/Box';
import { Link } from "react-router-dom";
import ResponsiveAppBar from './Navbar';


function Login() {
    return (
    <Box>   
        <ResponsiveAppBar />
        <Box className='signup-box'>
            <img className='sign-image' src={signimage} alt=''></img>
            <Box className='form-box'>
                <form className='sign-form' method="post">
                    <Box className='form-heading'>Log in to Exclusive</Box>
                    <Box className='form-subheading'>Enter your details below</Box>
                    <input className='form-content' type="text" placeholder='Email or Phone Number' />
                    <input className='form-content' type="text" placeholder='Password' />
                    <Box className='Log-buttons'>
                        <button className='login-btn' type='submit'>Log in</button>
                        <Link className='forgot' to="/">Forgot password</Link>
                    </Box>
                    
                </form>
            </Box>
        </Box>
    </Box> 
    );
}


export default Login;