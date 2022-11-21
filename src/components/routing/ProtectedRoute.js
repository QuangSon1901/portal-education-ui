import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import config from '~/config';
import { authSelector } from '~/redux/selector';

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useSelector(authSelector);

    return isAuthenticated ? <Outlet /> : <Navigate to={config.routes.login} />;
};

export default ProtectedRoute;
