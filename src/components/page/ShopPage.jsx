import useShopItems from "../../hooks/useShopItems";
import StringUtils from "../../utils/StringUtils";
import ShopItemCard from "../card/ShopItemCard";
import "../../styles/ShopPage.css";

export default function ShopPage() {
  const { shopItems, shopItemsIsLoading, shopItemsError } = useShopItems();

  return (
    // TODO: Clean up display logic
    <div className={"shop-page"}>
      {shopItemsIsLoading
        ? ""
        : !StringUtils.isEmpty(shopItemsError)
          ? shopItemsError
          : shopItems.map((shopItem) => (
              <ShopItemCard
                key={shopItem.id}
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
              />
            ))}
    </div>
  );
}
