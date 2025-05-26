import "../../styles/CartSideMenu.css";

export default function CartSideMenu({ isOpen, setIsOpen, cartItems }) {
  return (
    <section className={`cart-side-menu ${isOpen ? "open" : ""}`}>
      <div className="header">
        <h2 className="title">Shopping Cart - 1 Item(s)</h2>
        <button onClick={() => setIsOpen(!isOpen)}>Close</button>
      </div>
      <div className="body">
        {cartItems === undefined ||
        cartItems === null ||
        cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <span>Looks like your cart is empty.</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="footer">
        <button>Proceed to Checkout</button>
      </div>
    </section>
  );
}
