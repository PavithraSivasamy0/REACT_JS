import { useState } from "react";
import { RES_LIST } from "../utils/mockData";
import RestroCard from "./RestroCard";
const RestroContainer = () => {
  const [filterTopRatedRestro, setFilterTopRatedRestro] = useState(RES_LIST);
  return (
    <div className="restroContainer">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = filterTopRatedRestro.filter(
              (restaurant) => restaurant.data.avgRating >= 4
            );
            setFilterTopRatedRestro(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restroCard-container">
        {filterTopRatedRestro.map((restaurant) => (
          <RestroCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestroContainer;
