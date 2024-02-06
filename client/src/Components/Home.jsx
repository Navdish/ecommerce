import { useEffect, useState } from 'react';
import '../App.css'
import ResponsiveAppBar from './Navbar.jsx'
import axios from 'axios';
import Cookies from 'js-cookie';

function Home() {

    const[userRole, setUserRole] = useState();
    axios.defaults.headers.common['jwt-token'] = Cookies.get('token');
    const fetch_user = async() => await axios.get('http://localhost:8080/fetch_user')
    useEffect(()=> {
        async function userDetails(){
            const Data = await fetch_user();
            console.log("data", Data);
            setUserRole(Data.data.role);
        }
        userDetails();
    }, [])

    return (
        <>
            <ResponsiveAppBar role = {userRole} setRole= {setUserRole}/>
        </>
    )
}

export default Home;