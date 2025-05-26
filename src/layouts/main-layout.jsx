import React from "react";
import Header from "../components/common/header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-gray-200">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
