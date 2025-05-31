import { useState } from "react";
import "../../styles/ShopItemCard.css";
import NumberUtils from "../../utils/NumberUtils";
import NumberInput from "../input/NumberInput";

export default function ShopItemCard({
  id,
  title,
  price,
  description,
  imageUrl,
  handleAddToCart,
}) {
  const [quantity, setQuantity] = useState(0);

  // TODO: Revise as needed
  return (
    <div className="shop-item-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <div className="description">{description}</div>
      <div className="footer">
        <div className="price">{NumberUtils.formatAsDollars(price)}</div>
        <div className="quantity-add">
          <NumberInput value={quantity} setValue={setQuantity} />
          <button onClick={() => handleAddToCart(id, quantity)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
