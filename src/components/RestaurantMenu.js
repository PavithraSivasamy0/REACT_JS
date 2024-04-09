import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENULIST_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENULIST_API + resId);
    const json = await data.json();
    setRestaurantData(json.data);
  };

  if (restaurantData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restaurantData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="restaurant-menu-container">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
