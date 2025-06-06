import "../../styles/CartSideMenu.css";
import NumberUtils from "../../utils/NumberUtils";
import CartShopItemCard from "../card/CartShopItemCard";
import Icon from "../icon/Icon";

export default function CartSideMenu({
  isOpen,
  setIsOpen,
  cartItems,
  setCartItems,
  shopItems,
}) {
  const cartItemsLength =
    cartItems !== undefined && cartItems !== null ? cartItems.length : 0;

  const cartSubtotal = cartItems.reduce((total, cartItem) => {
    const shopItem = shopItems.find((shopItem) => shopItem.id === cartItem.id);
    return total + shopItem.price * cartItem.quantity;
  }, 0);

  function handleChangeItemQuantity(id, quantity) {
    const newCartItems = [...cartItems];
    newCartItems.find((cartItem) => cartItem.id === id).quantity = quantity;
    setCartItems(newCartItems);
  }

  function handleRemove(id) {
    const newCartItems = [...cartItems];
    const indexToRemove = newCartItems.findIndex(
      (cartItem) => cartItem.id === id,
    );
    newCartItems.splice(indexToRemove, 1);
    setCartItems(newCartItems);
  }

  return (
    <section className={`cart-side-menu ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="title">{`Shopping Cart (${cartItemsLength})`}</h2>
        <button
          className="icon-button primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Close shopping cart menu"
        >
          <Icon iconName={"close"} />
        </button>
      </div>
      <div className="body">
        {cartItemsLength === 0 ? (
          <div className="empty-cart-message">
            <span>Looks like your cart is empty.</span>
          </div>
        ) : (
          <ul className="cart-items" aria-label="Cart items">
            {cartItems.map((cartItem) => {
              const shopItem = shopItems.find(
                (shopItem) => shopItem.id === cartItem.id,
              );

              return (
                <li key={cartItem.id}>
                  <CartShopItemCard
                    title={shopItem.title}
                    price={shopItem.price}
                    quantity={cartItem.quantity}
                    setQuantity={(quantity) =>
                      handleChangeItemQuantity(cartItem.id, quantity)
                    }
                    handleRemove={() => handleRemove(cartItem.id)}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="footer">
          <button>{`Proceed to Checkout (${NumberUtils.formatAsDollars(cartSubtotal)})`}</button>
        </div>
      )}
    </section>
  );
}
