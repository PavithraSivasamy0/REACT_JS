import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestroCard from "./RestroCard";
import { Link } from "react-router-dom";
const RestroContainer = () => {
  // contains list of restro
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //for searching and filtering
  const [filtereRestaurants, setFilteredRestaurants] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState("");

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
          className="filter-btn"
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
      <div className="restroCard-container">
        {filtereRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
