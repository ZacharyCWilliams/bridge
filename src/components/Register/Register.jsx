import React, { useState } from 'react';
import axios from "axios"

function Register(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async e => {

    e.preventDefault();

    try {
      const userData = await axios.post('/api/auth/register', { name: name, email: email, password: password })
      console.log(userData)
      return userData;
    } catch(error) {
      console.log("There was an error")
      console.log(error)
    }

  }
  
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;