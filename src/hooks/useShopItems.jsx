import { useState, useEffect } from "react";

export default function useShopItems() {
  const [shopItems, setShopItems] = useState([]);
  const [shopItemsIsLoading, setShopItemsIsLoading] = useState(true);
  const [shopItemsError, setShopItemsError] = useState("");

  useEffect(() => {
    async function getShopItems() {
      setShopItems([]);
      setShopItemsIsLoading(true);
      setShopItemsError("");

      try {
        const response = await fetch("https://dummyjson.com/products");
        if (response.ok) {
          const json = await response.json();
          setShopItems(json.products);
        } else {
          throw new Error("Response was not ok");
        }
      } catch (error) {
        console.log(error);
        setShopItemsError("Unable to retrieve shop items.");
      } finally {
        setShopItemsIsLoading(false);
      }
    }

    getShopItems();
  }, []);

  return { shopItems, shopItemsIsLoading, shopItemsError };
}
