// import React, { useContext } from "react";
import Header from "../components/common/header";
import { Outlet } from "react-router";
// import UserContext from "../context/user-context";

const MainLayout = () => {
  // const { setUser } = useContext(UserContext);

  return (
    <div className="bg-gray-200">
      <Header />
      {/* <button onClick={() => setUser({ name: "Alex", age: 21 })}>
        change user
      </button> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
