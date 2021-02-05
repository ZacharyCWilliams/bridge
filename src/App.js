import './App.css';
import axios from "axios"
import Nav from "./Nav/Nav";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {

  return (
    <div className="App">
      <Nav />
      <Register />
      <Login />
    </div>
  );
}

export default App;
