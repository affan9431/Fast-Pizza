import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartItem, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartItem);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity || !totalCartPrice) return null; // If there are no items in
  return (
    <div
      className="bg-stone-800 text-stone-200 uppercase px-4 py-4 text-sm 
     sm:px-6 md:text-base flex justify-between items-center"
    >
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
