import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'
import AdminHome from './Components/Admin_hone.jsx'


function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home  />}></Route>
          <Route path='/Admin_home' element={<AdminHome  />}></Route>
          <Route path='/Home' element={<Navigate to ='/' replace={true} />} />
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          {/* <Route path='/Design' element={<Design />}></Route>
          <Route path='/Service' element={<Service />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
