import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
    width: "25rem",
    height:' 20rem',
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const navigate = useNavigate();
 

  const postData = async (e) => {
    e.preventDefault();
     await axios
      .post("https://book-seat-api.onrender.com/register", {
        name,email, phone, password, cpassword
      })
      .then(() => {
        // console.log(email, password);
        // const data = await res.json();
        // console.log(data);
        window.alert("Registration Successfull");
        console.log("Successfull Register");
        navigate("/");
      })
      .catch((err) => {
        window.alert("Invalid registration details");
        console.log("Invalid registered details");
        console.log(err);
      });
  }

  return (
    <div style={Container}>
      <form style={Form} onSubmit={postData}>
        <input type="text" name='name'  placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required style={Input} />
        <input type="email" name='email'  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required style={Input} />
        <input type="phone" name='phone'  placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required style={Input}/>
        <input type="password" name='password'  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required style={Input} />
        <input type="password" name='cpassword'  placeholder='Confirm Password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} required style={Input} />
        <button style={Btn} type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
