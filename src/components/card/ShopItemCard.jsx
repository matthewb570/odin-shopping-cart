import { useState } from "react";
import "../../styles/ShopItemCard.css";
import NumberUtils from "../../utils/NumberUtils";

export default function ShopItemCard({ title, price, description, imageUrl }) {
  const [quantity, setQuantity] = useState(0);

  function onQuantityChange(event) {
    setQuantity(event.target.value);
  }

  // TODO: Revise as needed
  return (
    <div className="shop-item-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <div className="description">{description}</div>
      <div className="footer">
        <div className="price">{NumberUtils.formatAsDollars(price)}</div>
        <label htmlFor="quantity">
          <span>Quantity</span>
          <input
            id="quantity"
            className="quantity"
            type="number"
            value={quantity}
            onChange={onQuantityChange}
          />
        </label>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}
