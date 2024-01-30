import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import AdminHome from './Components/Admin_hone.jsx'
// import react from 'react';
import {useState} from 'react'

function App() {
  
  const [user_id, setUser_id] = useState("");
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home user_id={user_id} />}></Route>
          <Route path='/Admin_home' element={<AdminHome user_id={user_id} />}></Route>
          <Route path='/Home' element={<Navigate to ='/' replace={true} />} />
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login user_id={user_id} setUser_id= {setUser_id} />}></Route>
          {/* <Route path='/Design' element={<Design />}></Route>
          <Route path='/Service' element={<Service />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
