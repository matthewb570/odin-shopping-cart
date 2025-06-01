import Icon from "../icon/Icon";

export default function CartButton({
  isCartSideMenuOpen,
  setIsCartSideMenuOpen,
}) {
  return (
    <button
      className={`cart-button icon-button primary`}
      onClick={() => setIsCartSideMenuOpen(!isCartSideMenuOpen)}
    >
      <Icon iconName={"shopping-cart"} />
    </button>
  );
}
