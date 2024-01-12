import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestroCard from "./RestroCard";
const RestroContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtereRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState("");
  console.log("Restaurants");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data?.data?.cards);
    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) return <Shimmer />;
  return (
    <div className="restroContainer">
      <div className="filter">
        <input
          name="search"
          className="filter-restro"
          value={searchedRestaurant}
          onChange={(e) => {
            setSearchedRestaurant(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter((restaurant) =>
              restaurant?.info?.name.includes(searchedRestaurant)
            );
            setFilteredRestaurants(filtered);
            setSearchedRestaurant("");
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.3
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restroCard-container">
        {filtereRestaurants.map((restaurant) => (
          <RestroCard key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
