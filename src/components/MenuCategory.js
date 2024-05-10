import { useState } from "react";
import MenuList from "./MenuList";

const MenuCategory = ({ data, showItem, setShowIndex }) => {
  return (
    <div className="w-6/12 mx-auto my-4">
      <div className="flex justify-between p-4 shadow-xl ">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <button
          onClick={() => {
            setShowIndex();
          }}
        >
          {showItem ? "🔼" : "🔽"}
        </button>
      </div>
      {showItem && <MenuList menu={data.itemCards} />}
    </div>
  );
};

export default MenuCategory;
