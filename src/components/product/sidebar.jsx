import { Link } from "react-router";
import { useCount } from "../../store/count";
const Sidebar = ({ productList }) => {
  const { count } = useCount();

  return (
    <aside className="col-start-1 col-end-2 ">
      <div className="bg-purple-400 p-4">count result: {count}</div>
      <ul className="flex flex-col gap-y-3">
        {productList.map((product) => {
          return (
            <li key={product.id} className="bg-blue-200">
              <Link to={`/products/${product.id}`}> {product.title}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
