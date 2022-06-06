import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Link } from "react-router-dom"


const Login = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  const handleSubmit=(e)=>{
  e.preventDefault();
  }
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email"  placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
      <br/>
      <input data-cy="login-password"  placeholder="enter password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <button data-cy="login-submit"  type="submit"><Link to="/">submit</Link></button>
      <br/>
      </form>
    </div>
  );
};

export default Login;
