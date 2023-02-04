
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <Auth0Provider
      domain="dev-oxj324863vk6tu04.us.auth0.com"
      clientId="mPFYKv67Z58WaOUSPctkoBMo9nyODmgf"
      authorizationParams={{
        redirect_uri: "https://nasa-frontend-bhupalisarma.vercel.app/nasaphoto"
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            user && user._id
              ?
              <Home />
              :
              <Login setLoginUser={setLoginUser} />
          }></Route>
          <Route path="/login" element={<Login />} setLoginUser={setLoginUser}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/nasaphoto" element={<NasaPhoto />}></Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
