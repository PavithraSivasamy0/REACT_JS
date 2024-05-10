import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import { Link } from "react-router-dom";
const RestroContainer = () => {
  // contains list of restro
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //for searching and filtering
  const [filtereRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState("");
  const PromotedRestro = withPromotedLabel(RestroCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restroCards =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restroCards);
    setFilteredRestaurants(restroCards);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restroContainer">
      <div className="flex mb-2">
        <input
          name="search"
          className="border border-solid border-black m-2"
          value={searchedRestaurant}
          onChange={(e) => {
            setSearchedRestaurant(e.target.value);
          }}
        />
        <button
          className="bg-green-200 px-4 py-1 mr-2 rounded-lg"
          onClick={() => {
            const filteredRestro = listOfRestaurants.filter((res) =>
              res?.info?.name
                .toLowerCase()
                .includes(searchedRestaurant.toLowerCase())
            );
            setFilteredRestaurants(filteredRestro);
            //setSearchedRestaurant("");
          }}
        >
          Search
        </button>
        <button
          className="bg-green-300 px-4 py-1 mr-2 rounded-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filtereRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            {restaurant.info.avgRating >= 4.4 ? (
              <PromotedRestro resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
