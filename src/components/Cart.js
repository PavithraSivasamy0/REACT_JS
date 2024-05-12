import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { emptyCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-extrabold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-4 border border-black bg-red-500 text-white rounded-lg shadow-xl"
          onClick={handleEmptyCart}
        >
          clear cart
        </button>
        <MenuList menu={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
