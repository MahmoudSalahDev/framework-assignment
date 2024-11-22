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
      path: "/framework-assignment/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "/framework-assignment/about", element: <About /> },
        { path: "/framework-assignment/portfolio", element: <Portfoilo /> },
        { path: "/framework-assignment/contact", element: <Contact /> },
        { path: "/framework-assignment/*", element: <Notfound /> },
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
