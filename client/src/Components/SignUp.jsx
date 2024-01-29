// import * as api from '../api/api.jsx';
import './signup.css'
import axios from 'axios'
import Box from '@mui/system/Box';
import { Link, useNavigate } from "react-router-dom";
import ResponsiveAppBar from './Navbar';
import React from 'react';
import {useState} from 'react';
import signimage from '../assets/signup.png';
import validator from 'validator';
import SelectVariants from './select.jsx'


function SignUp() {

    const obj ={
        name : "",
        email : "",
        password : "",
        role: ""
    }
    console.log("3");
    const [pass_error, setPass_error] = useState("");
    const [email_error, setEmail_error] = useState("");
    const [email_status, setEmail_status] = useState(false);
    const [pass_status, setPass_status] = useState(false);
    const [role, setRole] = useState("");
    const[form, setForm] = useState(obj);
    const signup = async(form) => await  axios.post('http://localhost:8080/signup', form);
    const navigate = useNavigate();
    async function handlesubmit(e){
        e.preventDefault();
        form.role = role;
        console.log("waiting for response");
        if(email_status && pass_status)
        {
            console.log("sjxnak");
            try {
                signup(form);
                navigate('/Login');
            }
            catch(error) {
                alert("Email already exists.")
                navigate('/Login');
            }
        }
        else {
            console.log("xnak");
            console.log(pass_status, email_status);
            pass_status&&setEmail_error("Email is not correct.");
            email_status&&setPass_error("Weak Password.");
        }
        
    }

    function handlename(e){
        setForm({...form, name : e.target.value});
    }

    function handlepassword(e) {
        console.log("1");
        setForm({...form, password : e.target.value});
        console.log("2");
        if(validator.isStrongPassword(form.password, {
            minLength: 8, minLowercase : 1, minUppercase : 1, minSymbols : 1, maxLength : 50, minNumbers : 1
        })){
            setPass_error("");
            setPass_status(true);
        }
        else {
            setPass_error("Weak Password");
            setPass_status(false);
        }
    }

    function handleemail(e) {
        setForm({...form, email : e.target.value});

        if(validator.isEmail(form.email))
        {
            setEmail_status(true);
            setEmail_error("");
        }
        else
        {
            setEmail_status(false);
            setEmail_error("Not a genuine email");
        }
    }
    
    return (
    <Box>   
        <ResponsiveAppBar />
        <Box className='signup-box'>
            <img className='sign-image' src={signimage} alt=''></img>
            <Box className='form-box'>
                <form className='sign-form' method="post" onSubmit={(e)=>handlesubmit(e)}>
                    <Box className='form-heading'>Create an account</Box>
                    <Box className='form-subheading'>Enter your details below</Box>
                    <input className='form-content' name='name' type="text" placeholder='Name' onChange={(e)=>handlename(e)} required />
                    
                    <input className='form-content' id='email' type="text" placeholder='Email or Phone Number' onChange={(e)=>handleemail(e)} required/>
                    <label for='email'>{email_error}</label>
                    <input className='form-content' id='password' type="text" placeholder='Password' onChange={(e)=>handlepassword(e)} required />
                    <label for='password'>{pass_error}</label>
                    <SelectVariants role={role} setRole ={setRole}/>
                    <button className='form-btn-submit' type='submit'  >Create Account</button>
                    <button className='Google-sign-btn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clipPath="url(#clip0_918_3336)">
                            <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4"/>
                            <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853"/>
                            <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04"/>
                            <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_918_3336">
                            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                        </svg><p className='google-btn-text'>Sign up with Google</p>
                    </button>
                    <Box className='login-box'>Already have account? <Link to="/Login">Log in</Link></Box>
                </form>
            </Box>
        </Box>
    </Box> 
    );
}


export default SignUp;

