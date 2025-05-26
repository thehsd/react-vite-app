import { NavLink, useLocation } from "react-router";

const Header = () => {
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
      </NavLink>
    </div>
  );
};

export default Header;
