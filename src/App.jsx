import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Portfolio from "./Pages/Portfolio"
import Notfound from "./Pages/Notfound.jsx"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index:true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        {path:"*", element:<Notfound/>},

      ]
    }
  ])

  return (
    <>
      <RouterProvider router ={routes}></RouterProvider>
  
    </>
  )
}

export default App