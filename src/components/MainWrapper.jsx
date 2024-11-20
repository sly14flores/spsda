import { lazy } from 'react';
import { useOutlet, Outlet } from "react-router-dom"

const Home = lazy(() => import('../pages/Home')); // Dashboard 

const MainWrapper = () => {

    const outlet = useOutlet()

    return (
        <>
            {
                outlet
                ?
                <Outlet />
                :
                <Home />
            }
        </>
    )

}

export default MainWrapper