import { Outlet } from "react-router";
import "../styles/App.css";
import NavBar from "./navigation/NavBar";
import CartSideMenu from "./menu/CartSideMenu";
import { useState } from "react";
import useShopItems from "../hooks/useShopItems";

function App() {
  const [isCartSideMenuOpen, setIsCartSideMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isSlidingNavMenuOpen, setIsSlidingNavMenuOpen] = useState(false);

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
        isSlidingNavMenuOpen={isSlidingNavMenuOpen}
        setIsSlidingNavMenuOpen={setIsSlidingNavMenuOpen}
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
