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
    <div className={styles.loginWrapper}>
      <Link className={styles.loginExit} to="/">
        <ClearTwoToneIcon />
      </Link>
      <div className={styles.loginContainer}>
        <div>
          <img className={styles.moneyImage} src={"https://cdn1.vectorstock.com/i/1000x1000/01/50/money-loss-down-arrow-stocks-graph-concept-of-vector-25000150.jpg"} alt=""/>
        </div>
        <div>
          <h1 className={styles.signInHeader}>Sign in</h1>
          <p className={styles.signInParagraph}>Walk the Bridge to financial freedom</p>
          <form className={styles.formWrapper} onSubmit={e => login(e)}>
            <label className={styles.loginEmailSvg}>
              <DraftsTwoToneIcon />
            </label>
            <input className={styles.loginInput} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
            <label className={styles.loginPasswordSvg}>
              <LockTwoToneIcon />
            </label>
            <input className={styles.loginInput} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            <button className={styles.loginBtn}>SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;