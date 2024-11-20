import { useOutlet, Outlet } from "react-router-dom"

const RootWrapper = () => {

    const outlet = useOutlet()

    return (
        <>
            {
                outlet && <Outlet />
            }
        </>
    )

}

export default RootWrapper