import "../../styles/CartSideMenu.css";

export default function CartSideMenu({ isOpen, setIsOpen }) {
  return (
    <div className={`cart-side-menu ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>Close</button>
    </div>
  );
}
