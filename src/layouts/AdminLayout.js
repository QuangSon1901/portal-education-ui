import React from 'react';
import AdminHeader from './components/main/AdminHeader';
import AdminSidebar from './components/sidebar/AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <div className="theme-mode-light">
            <div className="admin">
                <AdminSidebar />
                <div>
                    <AdminHeader />
                    <div className="body-admin">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
