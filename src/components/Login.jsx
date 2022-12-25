import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const Container = {
    width: "100vw",
    height: "87vh",
    backgroundColor: "lightslategray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const Form = {
    backgroundColor: 'white',
    width: "20rem",
    height:' 12rem',
    borderRadius: "15px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-evenly"
  }
  const Input = {
    fontSize: '18px'
  }
  const Btn = {
    fontSize: "17.5px",
    fontWeight: 'bold'
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
 

  const postData = async (e) => {
    e.preventDefault();
     await axios
      .post("https://book-seat-api.onrender.com/", {
        email,
        password,
      },{
        withCredentials: true 
      })
      .then(() => {
        console.log(email, password);
        // const data = await res.json();
        // console.log(data);
        window.alert("Login Successfull");
        console.log("Successfull Login");
        navigate("/reserve");
      })
      .catch((err) => {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
        console.log(err);
      });
  }

  return (
    <div style={Container}>
      <form style={Form}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={Input} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={Input} />
        <button style={Btn} onClick={postData} >Login</button>
      </form>
    </div>
  )
}

export default Login
