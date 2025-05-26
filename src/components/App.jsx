import { Outlet } from "react-router";
import "../styles/App.css";
import NavBar from "./navigation/NavBar";
import CartSideMenu from "./menu/CartSideMenu";
import { useState } from "react";

function App() {
  const [isCartSideMenuOpen, setIsCartSideMenuOpen] = useState(false);

  return (
    <>
      <NavBar
        isCartSideMenuOpen={isCartSideMenuOpen}
        setIsCartSideMenuOpen={setIsCartSideMenuOpen}
      />
      <CartSideMenu
        isOpen={isCartSideMenuOpen}
        setIsOpen={setIsCartSideMenuOpen}
      />
      <Outlet />
    </>
  );
}

export default App;
