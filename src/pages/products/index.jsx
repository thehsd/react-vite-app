import { useEffect, useState } from "react";

import Sidebar from "../../components/product/sidebar";
import { Outlet } from "react-router";
import { useCount } from "../../store/count";
const ProductsPage = () => {
  const [list, setList] = useState([]);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setList(data);
  }
const users = [{}]
  useEffect(() => {
    fetchData();
  }, []);
  const { actions } = useCount();
  return (
    <div className="grid grid-cols-6">
      <Sidebar productList={list} />
      <main className="col-start-2 col-end-7">
        <button
          className="cursor-pointer bg-blue-900 text-white p-3 rounded-md"
          onClick={() => actions.increase(5)}
        >
          increase
        </button>
        <button
          className="cursor-pointer bg-red-900 text-white p-3 rounded-md"
          onClick={() => actions.decrease(2)}
        >
          decrease
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default ProductsPage;
