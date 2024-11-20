import { RouterProvider } from "react-router-dom"
import router from './router'

// import useToken from './hooks/useToken.js'

function App() {

  // useToken()

  return (
    <RouterProvider router={router} />
  )
}

export default App