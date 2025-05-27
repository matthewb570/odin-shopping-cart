import "../../styles/CartSideMenu.css";
import CartShopItemCard from "../card/CartShopItemCard";

export default function CartSideMenu({
  isOpen,
  setIsOpen,
  cartItems,
  shopItems,
}) {
  const cartItemsLength =
    cartItems !== undefined && cartItems !== null ? cartItems.length : 0;

  return (
    <section className={`cart-side-menu ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="title">{`Shopping Cart - ${cartItemsLength} Item(s)`}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>Close</button>
      </div>
      <div className="body">
        {cartItemsLength === 0 ? (
          <div className="empty-cart-message">
            <span>Looks like your cart is empty.</span>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((cartItem) => {
              const shopItem = shopItems.find(
                (shopItem) => shopItem.id === cartItem.id,
              );

              return (
                <CartShopItemCard
                  title={shopItem.title}
                  price={shopItem.price}
                  quantity={cartItem.quantity}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="footer">
        <button>Proceed to Checkout</button>
      </div>
    </section>
  );
}
