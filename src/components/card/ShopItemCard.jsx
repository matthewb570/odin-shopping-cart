import "../../styles/ShopItemCard.css";

export default function ShopItemCard({ title, price, description, imageUrl }) {
  // TODO: Revise as needed
  return (
    <div className="shop-item-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <div className="description">{description}</div>
      <div className="footer">
        <div className="price">{price}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
