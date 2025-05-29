import useBasket from "../../store/basket";
import BasketProductItem from "./basket-product-item";

const BasketProductsList = () => {
  const { items } = useBasket();

  return (
    <div>
      {items.map((item) => {
        return <BasketProductItem key={item.id} data={item} />;
      })}
    </div>
  );
};

export default BasketProductsList;
