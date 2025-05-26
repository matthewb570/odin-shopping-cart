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
      <Outlet context={{ cartItems, setCartItems }} />
      <NavBar
        isCartSideMenuOpen={isCartSideMenuOpen}
        setIsCartSideMenuOpen={setIsCartSideMenuOpen}
        cartItems={cartItems}
      />
      <CartSideMenu
        isOpen={isCartSideMenuOpen}
        setIsOpen={setIsCartSideMenuOpen}
        cartItems={cartItems}
      />
    </>
  );
}

export default App;
