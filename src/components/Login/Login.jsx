import React, { useState } from 'react';
import axios from "axios"

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
    e.preventDefault();
    try {
      const userData = await axios.post('/api/auth/login', { email: email, password: password })
      if (userData) {
        console.log("great success")
        return userData
      };
    } catch(error) {
      console.log("There was an error")
      console.log(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={e => login(e)}>
        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;