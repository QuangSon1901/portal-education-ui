import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import config from '~/config';
import { logoutUser } from '~/pages/auth/authSlice';
import { authSelector } from '~/redux/selector';
import * as httpRequest from '~/utils/httpRequest';

const AdminProtectedRoute = () => {
    const { isAuthenticated, type } = useSelector(authSelector);
    const dispatch = useDispatch();

    return !isAuthenticated ? (
        <Navigate to={config.routes.login} />
    ) : type === 'a' ? (
        <Outlet />
    ) : (
        dispatch(logoutUser()) && <Navigate to={config.routes.login} />
    );
};

export default AdminProtectedRoute;
