import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios"
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import { Route, Link, Switch, useHistory, Redirect } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { checkAuthStatus } from "./utils/status";

function App() {

  // const [authentication, setAuthentication] = useState(null)

  // useEffect(() => {
  //   const auth = checkAuthStatus();
  //   if (checkAuthStatus) {
  //     setAuthentication(auth)
  //   }
  // })

  return (
    <div className="App">
    <Nav />
    <Switch>
      <PublicRoute component={Login} restricted={false} path="/login" />
      <PublicRoute component={Register} path="/register" />
      <PrivateRoute component={Home} path="/home" />
    </Switch> 
  </div>
  );
}

export default App;


  //  { authentication ? <Home /> : <Landing /> }