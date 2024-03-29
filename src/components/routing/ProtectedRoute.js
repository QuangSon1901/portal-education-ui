import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import config from '~/config';
import { logoutUser } from '~/pages/auth/authSlice';
import { authSelector } from '~/redux/selector';

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated, type } = useSelector(authSelector);
    const dispatch = useDispatch();

    return !isAuthenticated ? (
        <Navigate to={config.routes.login} />
    ) : type === 's' ? (
        <Outlet />
    ) : (
        dispatch(logoutUser()) && <Navigate to={config.routes.login} />
    );
};

export default ProtectedRoute;
