import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { authSelector } from '~/redux/selector';

const AuthLayout = ({ children }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector(authSelector);
    if (isAuthenticated) {
        return navigate(-1, { replace: true });
    }
    return (
        <div className="theme-mode-light">
            <div className="auth">
                <div className="auth__form">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
