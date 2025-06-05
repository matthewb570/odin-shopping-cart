import CartButton from "../button/CartButton";
import "../../styles/NavBar.css";
import Icon from "../icon/Icon";
import Badge from "../badge/Badge";
import { NavLink } from "react-router";
import RouterConfig from "../../router/RouterConfig";
import FullScreenMenu from "../menu/FullScreenMenu";
import MenuButton from "../button/MenuButton";

export default function NavBar({
  isCartSideMenuOpen,
  setIsCartSideMenuOpen,
  cartItems,
  isSlidingNavMenuOpen,
  setIsSlidingNavMenuOpen,
}) {
  return (
    <nav className="nav-bar">
      <span>
        <Logo />
      </span>
      <span className="nav-links desktop-only">
        <span>
          <NavLink to={RouterConfig.HOME_PAGE_PATH}>Home</NavLink>
        </span>
        <span>
          <NavLink to={RouterConfig.SHOP_PAGE_PATH}>Shop</NavLink>
        </span>
      </span>
      <span>
        <BadgeCartButton
          cartItems={cartItems}
          isCartSideMenuOpen={isCartSideMenuOpen}
          setIsCartSideMenuOpen={setIsCartSideMenuOpen}
          className={"desktop-only"}
        />
        <MenuButton
          isMenuOpen={isSlidingNavMenuOpen}
          setIsMenuOpen={setIsSlidingNavMenuOpen}
          className={"mobile-only"}
        />
      </span>
      <FullScreenMenu
        title={"Menu"}
        isOpen={isSlidingNavMenuOpen}
        setIsOpen={setIsSlidingNavMenuOpen}
      >
        <div className="nav-links">
          <NavLink
            to={RouterConfig.HOME_PAGE_PATH}
            onClick={() => setIsSlidingNavMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={RouterConfig.SHOP_PAGE_PATH}
            onClick={() => setIsSlidingNavMenuOpen(false)}
          >
            Shop
          </NavLink>
        </div>
        <BadgeCartButton
          cartItems={cartItems}
          isCartSideMenuOpen={isCartSideMenuOpen}
          setIsCartSideMenuOpen={setIsCartSideMenuOpen}
        />
      </FullScreenMenu>
    </nav>
  );
}

function Logo() {
  return (
    <span className="logo">
      <Icon iconName="purse" />
      <span>Online</span>
      <span>Shop</span>
    </span>
  );
}

function BadgeCartButton({
  cartItems,
  isCartSideMenuOpen,
  setIsCartSideMenuOpen,
  className,
}) {
  return (
    <Badge
      badgeText={`${cartItems !== undefined && cartItems !== null && cartItems.length > 0 ? cartItems.length : ""}`}
      className={className}
      label={`${cartItems.length} unique products in your cart`}
    >
      <CartButton
        isCartSideMenuOpen={isCartSideMenuOpen}
        setIsCartSideMenuOpen={setIsCartSideMenuOpen}
      />
    </Badge>
  );
}
