import signimage from '../assets/signup.png';
import './signup.css'
import Box from '@mui/system/Box';
import { Link } from "react-router-dom";
import ResponsiveAppBar from './Navbar';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SelectVariants from './select.jsx'


function Login() {
    
    const [role, setRole] = useState("");
    const obj ={
        email : "",
        password : "", 
        role : ""
    }
    const[form, setForm] = useState(obj);
    const navigate = useNavigate();
    const Login = async(form) => await  axios.post('http://localhost:8080/login', form);

    function handleemail(e){
        setForm({...form, email : e.target.value});
    }
    function handlepassword(e){
        setForm({...form, password : e.target.value});
    }
    async function handlesubmit(e){
        e.preventDefault();
        form.role = role;
        console.log(form);
        console.log("waiting for response");
    
        try {
            console.log("inside try")
            const response = await Login(form);
            console.log(response);
            
            navigate('/');
        }
        catch(error) {
            alert("Invalid Credentials");
        }
    }

    return (
    <Box>   
        <ResponsiveAppBar />
        <Box className='signup-box'>
            <img className='sign-image' src={signimage} alt=''></img>
            <Box className='form-box'>
                <form className='sign-form' method="post">
                    <Box className='form-heading'>Log in to Exclusive</Box>
                    <Box className='form-subheading'>Enter your details below</Box>
                    <input className='form-content' type="text" placeholder='Email or Phone Number' onChange={(e)=>handleemail(e)}/>
                    <input className='form-content' type="text" placeholder='Password' onChange={(e)=>handlepassword(e)} />
                    <SelectVariants role={role} setRole= {setRole}/>
                    <Box className='Log-buttons'>
                        <button className='login-btn' type='submit' onClick={(e)=>handlesubmit(e)}>Log in</button>
                        <Link className='forgot' to="/">Forgot password</Link>
                    </Box>
                    
                </form>
            </Box>
        </Box>
    </Box> 
    );
}


export default Login;