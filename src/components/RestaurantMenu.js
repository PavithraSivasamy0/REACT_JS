import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const status = useOnlineStatus();
  const [showIndex, setShowIndex] = useState(null);

  if (status === false)
    return <h1>It seems you're offline, please check on connection!</h1>;

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) => {
        return (
          ele?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="text-center">
      <h1 className="font-extrabold my-8 text-4xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ") + " - " + costForTwoMessage}
      </p>
      <h4>Menu</h4>
      {categories.map((Category, index) => (
        <MenuCategory
          key={Category?.card?.card?.title}
          data={Category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
