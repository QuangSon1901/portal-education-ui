import { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './components/routing/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import { privateRoute, publicRoutes } from './routes';
import '~/scss/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PromiseLoading from './components/PromiseLoading';
import { useDispatch } from 'react-redux';
import { getUser } from './pages/auth/authSlice';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = MainLayout;

                        if (route.layout) Layout = route.layout;
                        else if (route.layout === null) Layout = Fragment;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {privateRoute.map((route, index) => {
                        const Page = route.component;

                        let Layout = MainLayout;

                        if (route.layout) Layout = route.layout;
                        else if (route.layout === null) Layout = Fragment;

                        return (
                            <Route key={index} path={route.path} element={<ProtectedRoute />}>
                                <Route
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            </Route>
                        );
                    })}
                </Routes>
            </BrowserRouter>
            <ToastContainer style={{ fontSize: '1.4rem' }} />
            <PromiseLoading />
        </>
    );
}

export default App;
