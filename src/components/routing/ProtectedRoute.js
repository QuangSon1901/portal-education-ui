import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import config from '~/config';

const ProtectedRoute = () => {
    const authenticated = true;

    return authenticated ? <Outlet /> : <Navigate to={config.routes.login} replace />;
};

export default ProtectedRoute;
