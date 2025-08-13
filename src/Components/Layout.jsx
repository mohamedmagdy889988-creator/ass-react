import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


function Layout() {
  const {pathname} = useLocation();


  return (

    <>
      <Navbar />
      <div className={`min-h-dvh center ${pathname === "/" || pathname === "/about" ? 'bg-primary' : 'bg-white'}`}>
        <div className="container pt-40 text-center">
          <Outlet />

        </div>


      </div>
      <Footer />

     
    </>
  )
}

export default Layout