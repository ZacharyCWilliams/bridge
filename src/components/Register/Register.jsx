import React, { useState } from 'react';
import axios from "axios"
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';

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
    <div className={styles.modalBackground}>
      <div className={styles.signUpContainer}>
        <div className={styles.exitBtn}>
          <Link to="/">
            <ClearTwoToneIcon />
          </Link>
        </div>
        <div className={styles.registerImage}>
          <img src={"https://designcode.io/images/illustrations/teamwork.svg"} alt=""/>
        </div>
        <div className={styles.formWrapper}>
          <h1 className={styles.header}>
            Sign Up
          </h1>
          <p className={styles.tagline}>
            { "The Bridge provides a step by step guide to financial freedom. We invite you to take your first step today." }  
          </p>
          <form className={styles.registerForm} onSubmit={registerUser}>
            <div className={styles.inputWrapper}>
              <label className={styles.formInputLabel}>
                <DraftsTwoToneIcon />
              </label>
              <input className={styles.registerInput} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.formInputLabel}>
                <DraftsTwoToneIcon />
              </label>
              <input className={styles.registerInput} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.formInputLabel}>
                <LockTwoToneIcon />
              </label>
              <input className={styles.registerInput} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
            <button className={styles.registerBtn}>Sign Up</button>
          </form>
            <p className={styles.disclaimer}>By clicking on Sign up, you agree to our Terms of service and Privacy policy.</p>
            <div className={styles.footerWrapper}>
              <p className={styles.linkToLoginParagraph}>Already have an account? </p>
              <Link className={styles.linkToLogin} to="/login">Sign In</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Register;