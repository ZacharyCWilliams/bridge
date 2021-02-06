import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuthStatus } from "../utils/status";
import Login from "../components/Login/Login";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            (checkAuthStatus() && restricted) ? <Redirect to="/home" /> : <Component {...props} />
        )} />
    );
};

export default PublicRoute;