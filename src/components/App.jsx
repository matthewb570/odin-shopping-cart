import { Outlet } from "react-router";
import "../styles/App.css";
import NavBar from "./navigation/NavBar";
import CartSideMenu from "./menu/CartSideMenu";
import { useState } from "react";
import useShopItems from "../hooks/useShopItems";

function App() {
  const [isCartSideMenuOpen, setIsCartSideMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { shopItems, shopItemsIsLoading, shopItemsError } = useShopItems();

  return (
    <>
      <Outlet
        context={{
          shopItems,
          shopItemsIsLoading,
          shopItemsError,
          cartItems,
          setCartItems,
        }}
      />
      <NavBar
        isCartSideMenuOpen={isCartSideMenuOpen}
        setIsCartSideMenuOpen={setIsCartSideMenuOpen}
        cartItems={cartItems}
      />
      <CartSideMenu
        isOpen={isCartSideMenuOpen}
        setIsOpen={setIsCartSideMenuOpen}
        shopItems={shopItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;
