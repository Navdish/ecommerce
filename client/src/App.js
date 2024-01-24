import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home.jsx'

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Navigate to ='/' replace={true} />} />
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/login' element={<Contact />}></Route>
          {/* <Route path='/Design' element={<Design />}></Route>
          <Route path='/Service' element={<Service />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
