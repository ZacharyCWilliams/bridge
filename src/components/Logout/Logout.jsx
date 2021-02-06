import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory()

  const logoutUser = async(e) => {
    e.preventDefault();
    await localStorage.removeItem('user');
    history.push("/login")
  }

  return (
    <button onClick={e => logoutUser(e)}>
      LOGOUT
    </button>
  )
}

export default Logout;