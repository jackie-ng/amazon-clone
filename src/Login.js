import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { projectAuth } from "./fbConfig.js";

function Login() {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = e => {
    e.preventDefault(); //stop the refresh
    //do the login logic...
    projectAuth.signInWithEmailAndPassword(email, password)
    .then(auth =>  {
      //login successfully, redirect to homepage
      history.push("/")
    }).catch(e => alert(e.message))
  }

  const register = e => {
    e.preventDefault(); //stop the refresh
    //do the login logic...
    projectAuth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      //create user and logged in. Redirect to homepage
      history.push("/")
    }).catch(e => alert(e.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"
          alt="logo" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
        <h5>Email</h5>
        <input type="email" onChange={event => setEmail(event.target.value)} value={email}/>
        <h5>Password</h5>
        <input type="password" onChange={event => setPassword(event.target.value)} value={password}/>
        <button className="login__signInButton" type="submit" onClick={login}>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span> Privacy Notice</span>.</p>
      <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login
