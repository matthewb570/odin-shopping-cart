import useShopItems from "../../hooks/useShopItems";
import StringUtils from "../../utils/StringUtils";
import ShopItemCard from "../card/ShopItemCard";
import "../../styles/ShopPage.css";
import { useOutletContext } from "react-router";
import CartItem from "../../objects/CartItem";

export default function ShopPage() {
  const { shopItems, shopItemsIsLoading, shopItemsError } = useShopItems();

  const { cartItems, setCartItems } = useOutletContext();

  function handleAddToCart(shopItemId, quantity) {
    if (quantity > 0) {
      const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === shopItemId,
      );
      if (existingCartItemIndex === -1) {
        setCartItems([...cartItems, new CartItem(shopItemId, quantity)]);
      } else {
        const newCartItems = [...cartItems];
        newCartItems[existingCartItemIndex].quantity += quantity;
        setCartItems(newCartItems);
      }
    }
  }

  return (
    // TODO: Clean up display logic
    <div className={"shop-page"}>
      {shopItemsIsLoading
        ? ""
        : !StringUtils.isEmpty(shopItemsError)
          ? shopItemsError
          : ""}

      <div
        className={`card-list ${shopItemsIsLoading || !StringUtils.isEmpty(shopItemsError) ? "hidden" : ""}`}
      >
        {shopItems.map((shopItem) => (
          <ShopItemCard
            key={shopItem.id}
            id={shopItem.id}
            title={shopItem.title}
            price={shopItem.price}
            description={shopItem.description}
            imageUrl={
              shopItem.images !== undefined &&
              shopItem.images !== null &&
              shopItem.images.length > 0
                ? shopItem.images[0]
                : ""
            }
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
