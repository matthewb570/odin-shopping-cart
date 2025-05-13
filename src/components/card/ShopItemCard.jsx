export default function ShopItemCard({ title, price, description, imageUrl }) {
  // TODO: Revise as needed
  return (
    <div className="shop-item-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <span>{description}</span>
      <span>{price}</span>
    </div>
  );
}
