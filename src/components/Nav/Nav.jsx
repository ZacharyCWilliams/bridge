import React from 'react';
import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import ContactsTwoToneIcon from '@material-ui/icons/ContactsTwoTone';
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

const Nav = () => (
  <section className={styles.container}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="logo-placeholder"/>
      </Link>
    </div>
    <div className={styles.navLinkContainer}>
      <div className={styles.navLink}>
        <LibraryBooksTwoToneIcon />
        <Link className={styles.navLinkWord} to="/courses">The Bridge</Link>
      </div>
      <div className={styles.navLink}>
        <AccountBalanceTwoToneIcon />
         <Link className={styles.navLinkWord} to="/services">Services</Link>
      </div>
      <div className={styles.navLink}>
        <ImportContactsTwoToneIcon />
        <Link className={styles.navLinkWord} to="/blog">Blog</Link>
      </div>
      <div className={styles.navLink}>
        <PaymentTwoToneIcon />
        <Link className={styles.navLinkWord} to="/placeholder">Placeholder</Link>
      </div>
      <div className={styles.navLink}>
        <ContactsTwoToneIcon />
        <Link className={styles.navLinkWord} to="/about">About</Link>
      </div>
    </div>
    <div className={styles.login}>
      <Link className={styles.loginLink} to="/login">
        <AccountCircleTwoToneIcon fontSize="large" />
      </Link>
    </div>
  </section>
)

export default Nav;

// the bridge has both money tracks and courses