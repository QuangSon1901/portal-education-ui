import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="theme-mode-light">
            <div className="auth">
                <div className="auth__form">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;
