import { Outlet } from "react-router";
import "../styles/App.css";
import NavBar from "./navigation/NavBar";
import CartSideMenu from "./menu/CartSideMenu";
import { useState } from "react";

function App() {
  const [isCartSideMenuOpen, setIsCartSideMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
}

export default App;
