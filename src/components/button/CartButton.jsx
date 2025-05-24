import Icon from "../icon/Icon";
import "../../styles/CartButton.css";

export default function CartButton() {
  return (
    <button className="cart-button">
      <Icon iconName={"shopping-cart"} />
    </button>
  );
}
