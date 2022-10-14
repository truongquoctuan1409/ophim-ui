import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';
import Layout from '~/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let DefaultLayout = Layout;
                        if (route.layout === null) {
                            DefaultLayout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
