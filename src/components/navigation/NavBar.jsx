import CartButton from "../button/CartButton";
import "../../styles/NavBar.css";
import Icon from "../icon/Icon";
import Badge from "../badge/Badge";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <span>
        <Logo />
      </span>
      <span className="nav-links">Links</span>
      <span>
        <Badge badgeText="1">
          <CartButton />
        </Badge>
      </span>
    </div>
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
