import * as api from '../api/api.jsx';
import './signup.css'
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Link, redirect } from "react-router-dom";
import ResponsiveAppBar from './Navbar';
import React from 'react';
import {useState} from 'react';


function SignUp() {

    const obj ={
        name : String,
        email : String,
        password : String
    }

    const[form, setForm] = useState(obj);

    function handlesubmit(e){
        e.preventDefault();
        console.log(form);
        const response = api.signUp(form);
        
        redirect('/');
    }

    function handlechange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }

    return (
    <Box>   
        <ResponsiveAppBar />
        <Box className='signup-box'>
            <img src='../assets/signup.png' alt=''></img>
            <Box>
                <form action="post" onSubmit={(e)=>handlesubmit(e)}>
                    <Box>Create an account</Box>
                    <Box>Enter your details below</Box>
                    <input name='name' type="text" placeholder='Name' onChange={(e)=>handlechange(e)} />
                    <input name='email' type="text" placeholder='Email or Phone Number' onChange={(e)=>handlechange(e)}/>
                    <input name='password' type="text" placeholder='Password' onChange={(e)=>handlechange(e)} />
                    <Button type='submit'>Create Account</Button>
                    <Button>Sign up with Google</Button>
                    <Box>Already have account? <Link to="/Login">Log in</Link></Box>
                </form>
            </Box>
        </Box>
    </Box> 
    );
}


export default SignUp;

