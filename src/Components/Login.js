import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ setLoginUser }) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate ()

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://nabackend-omnarayansingh.vercel.app/login", user)
            .then(res => {
                navigate("/nasaphoto")
            })
    }

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/signup")}>Signup</div>
            <div>or</div>
            <button className="loginBtn loginBtn--google" onClick={() => loginWithRedirect()}>Log In with Google</button>
        </div>
    )
}

export default Login
