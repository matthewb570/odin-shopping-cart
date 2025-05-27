import NumberInput from "../input/NumberInput";
import "../../styles/CartShopItemCard.css";
import NumberUtils from "../../utils/NumberUtils";

export default function CartShopItemCard({
  title,
  price,
  quantity,
  setQuantity,
  handleDelete,
}) {
  return (
    <div className="cart-shop-item-card">
      <div className="header">
        <h3 className="title">{`${title} - ${NumberUtils.formatAsDollars(price)} each`}</h3>
      </div>
      <div className="footer">
        <NumberInput value={quantity} setValue={setQuantity} />
        <button className="secondary">Remove</button>
      </div>
    </div>
  );
}
