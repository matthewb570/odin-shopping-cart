import Icon from "../icon/Icon";
import "../../styles/CartButton.css";

export default function CartButton({
  isCartSideMenuOpen,
  setIsCartSideMenuOpen,
}) {
  return (
    <button
      className={`cart-button`}
      onClick={() => setIsCartSideMenuOpen(!isCartSideMenuOpen)}
    >
      <Icon iconName={"shopping-cart"} />
    </button>
  );
}
