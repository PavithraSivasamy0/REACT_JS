import { useDispatch } from "react-redux";
import { addToCart } from "../utils/redux/cartSlice";
import { CDN_URL } from "../utils/constant";

const MenuList = ({ menu }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      {menu.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-slate-50 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <p>
                {item.card.info.finalPrice ? (
                  <span>{"₹" + item.card.info.finalPrice / 100}</span>
                ) : (
                  <span>{"₹" + item.card.info.price / 100}</span>
                )}
              </p>
            </div>
            <p className="text-sm py-4">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-1 bg-white shadow-lg rounded-sm"
                onClick={() => handleAddItem(item)}
              >
                add +{" "}
              </button>
            </div>
            <img
              className="rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt="menu-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
