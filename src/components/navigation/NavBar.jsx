import CartButton from "../button/CartButton";
import "../../styles/NavBar.css";
import Icon from "../icon/Icon";
import Badge from "../badge/Badge";
import { NavLink } from "react-router";
import RouterConfig from "../../router/RouterConfig";

export default function NavBar({
  isCartSideMenuOpen,
  setIsCartSideMenuOpen,
  cartItems,
}) {
  return (
    <nav className="nav-bar">
      <span>
        <Logo />
      </span>
      <span className="nav-links">
        <span>
          <NavLink to={RouterConfig.HOME_PAGE_PATH}>Home</NavLink>
        </span>
        <span>
          <NavLink to={RouterConfig.SHOP_PAGE_PATH}>Shop</NavLink>
        </span>
      </span>
      <span>
        <Badge
          badgeText={`${cartItems !== undefined && cartItems !== null && cartItems.length > 0 ? cartItems.length : ""}`}
        >
          <CartButton
            isCartSideMenuOpen={isCartSideMenuOpen}
            setIsCartSideMenuOpen={setIsCartSideMenuOpen}
          />
        </Badge>
      </span>
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
