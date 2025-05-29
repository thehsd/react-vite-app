import { NavLink } from "react-router";
import useBasket from "../../store/basket";

const Header = () => {
  const { items } = useBasket();

  // const calcTotalQuantity = () => {
  //   let total = 0;
  //   items.forEach((element) => {
  //     total += element.quantity;
  //   });
  //   return total;
  // };
  const calcTotalQuantity = () => {
    return items.reduce((acc, cur) => acc + cur.quantity, 0);
  };
  return (
    <div className="flex justify-between p-3 bg-white">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "text-gray-800" : isActive ? "text-blue-600" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/basket"}
        className={({ isActive, isPending }) =>
          isPending ? "text-gray-800" : isActive ? "text-blue-600" : ""
        }
      >
        Basket
        <span className="bg-black p-2 text-white mx-2 rounded-lg">
          {calcTotalQuantity()}
        </span>
      </NavLink>
    </div>
  );
};

export default Header;
