import React, { useState } from 'react';
import { useHistory, useLocation, Link } from "react-router-dom";
import axios from "axios"
import styles from "./Login.module.css";
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';

const Login = () => {

  let history = useHistory();
  let location = useLocation();
  // let auth = useAuth();

  // let { from } = location.state || { from: { pathname: "/" } };
  // let login = () => {
  //   auth.signin(() => {
  //     history.replace(from);
  //   });
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async e => {
    e.preventDefault();
    try {
      const userData = await axios.post('/api/auth/login', { email: email, password: password })
      if (userData) {
        // history.push("/")
        return userData
      };
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.loginContainer}>
        <div className={styles.exitBtn}>
          <Link className={styles.exitBtnLink} to="/">
            <ClearTwoToneIcon />
          </Link>
        </div>


        <div className={styles.loginImage}>
          <img src={"https://designcode.io/images/illustrations/teamwork.svg"} alt=""/>
        </div>

        <div className={styles.formWrapper}>
          <h1 className={styles.header}>Sign in</h1>
          <p className={styles.tagline}>Welcome back! Let's get to work.</p>
          
          <form className={styles.loginWrapper} onSubmit={e => login(e)}>
            <div className={styles.inputWrapper}>
              <label className={styles.formInputLabel}>
                <DraftsTwoToneIcon />
              </label>
              <input className={styles.loginInput} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.formInputLabel}>
                <LockTwoToneIcon />
              </label>
              <input className={styles.loginInput} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>

            <button className={styles.loginBtn}>SIGN IN</button>
          </form>
          
          <div className={styles.footerWrapper}>
            <div className={styles.flex}>
              <p className={styles.linkToRegisterParagraph}>Need an account?</p>
              <Link className={styles.linkToRegister} to="/register">Sign Up</Link>
            </div>
            <div className={styles.flex}>
              <p className={styles.linkToRegisterParagraph}>Forgot your password?</p>
              <Link className={styles.linkToRegister} to="/recover">Reset Password</Link>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;

{/* <div className={styles.modalBackground}>
      <div className={styles.signUpContainer}>
        <div className={styles.exitBtn}>
          <Link className={styles.exitBtnLink} to="/">
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
                <PersonOutlineTwoToneIcon />
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
    </div> */}