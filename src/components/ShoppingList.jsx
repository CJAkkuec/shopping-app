import { ListItem } from "./ListItem";
import { useEffect, useState } from "react";

export const ShoppingList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "https://fetch-me.vercel.app/shopping-list.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const itemsMap = items.map((item) => {
    return <ListItem key={item.id} name={item.name} />;
  });

  return (
    <>
      <ul className="shoppingCart">{itemsMap}</ul>
      <ul className="shoppingCart">{itemsMap}</ul>
    </>
  );
};
