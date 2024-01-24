import {Signup} from '../assets/signup.png'
import './signup.css'

function SignUp() {
    <Box className='signup-box'>
        <img src={Signup}></img>
        <Box>
            <form action="post">
                <Box>Create an account</Box>
                <Box>Enter your details below</Box>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email or Phone Number' />
                <input type="text" placeholder='Password' />
                <Button type='submit'>Create Account</Button>
                <Button>Sign up with Google</Button>
                <Box>Already have account? <Link to=""></Link></Box>
            </form>
        </Box>
    </Box>
}


export default SignUp;