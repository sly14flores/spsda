import {
    createBrowserRouter,
    // Navigate
} from 'react-router-dom';
import { lazy, Suspense  } from 'react';

const fallback = <>Loading...</>;

const RootWrapper = lazy(() => import('./components/RootWrapper'));
const MainWrapper = lazy(() => import('./components/MainWrapper'));

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Suspense fallback={fallback}><RootWrapper /></Suspense>,
            children: [
                {
                    path: '',
                    element: <MainWrapper />,
                    children: [
                        {
                            path: 'login',
                            element: <Login />,
                        },                         
                        {
                            path: 'dashboard',
                            element: <Dashboard />,
                        },                        
                        {
                            path: 'about',
                            element: <About />,
                        },
                    ]
                }
            ]
        }
    ]
)

export default router