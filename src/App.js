
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import './App.css';

function App() {

  const[user,setLoginUser] = useState({})

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
        user && user._id 
        ?
        <Home/> 
         :
        <Login  setLoginUser={setLoginUser}/>
      }></Route>
      <Route path="/login" element={<Login/>} setLoginUser={setLoginUser}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/nasaphoto" element={<NasaPhoto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
