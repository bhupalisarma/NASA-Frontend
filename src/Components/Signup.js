import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const register = ()=>{
         const {name , email , password , reEnterPassword} = user

         if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/signup",user)
            .then(res =>{
                navigate("/nasaphoto")
            })
         }else{
            alert("invalid ip")
         }

         
    }
    const navigate = useNavigate ()

    const handleChange = e =>{
        const{name,value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    return (
        <div className="signup">
            {console.log("User",user)}
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <br></br>
            <br></br>
            <div className="button" onClick={register}>Signup</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/login")}>Login</div>
        </div>
    )
}

export default Signup