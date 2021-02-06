import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuthStatus } from "../utils/status";
import Home from "../components/Home/Home";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (checkAuthStatus() ? <Component {...props} /> : <Redirect to="/login" />)} />
    );
};

export default PrivateRoute;