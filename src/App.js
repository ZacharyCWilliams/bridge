import './App.css';
import axios from "axios"
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Route, Link, Switch, useHistory, Redirect } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* <Route path>

        </Route> */}
      </Switch> 
    </div>
  );
}

export default App;
