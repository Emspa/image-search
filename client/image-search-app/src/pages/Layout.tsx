import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import './Layout.css'

export const Layout = () => {
    return (
      <>
        <header className="header">
          <Navbar />
  
        </header>
        <main>
          <Outlet />
        </main>
  
        <footer>
          
        </footer>
      </>
    );
  };
