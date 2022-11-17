import React from 'react';
import Header from './components/main/Header';

const MainLayout = ({ children }) => {
    return (
        <div className="theme-mode-light">
            <Header />
            <div className="body-main">{children}</div>
        </div>
    );
};

export default MainLayout;
