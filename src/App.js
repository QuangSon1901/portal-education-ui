import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './components/routing/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import { privateRoute, publicRoutes } from './routes';
import '~/scss/index.scss';

function App() {
    return (
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
    );
}

export default App;
