import { createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Home from "./Pages/Home/Home"
import Portfoilo from "./Pages/Portfolio/Portfoilo"
import Layout from "./Components/Layout/Layout"
import Notfound from "./Pages/Notfound/Notfound"

function App() {


  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfoilo /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <Notfound /> },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
