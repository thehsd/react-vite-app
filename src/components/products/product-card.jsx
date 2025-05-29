import React from "react";
import useBasket from "../../store/basket";

const ProductCard = ({ data }) => {
  const { actions, items } = useBasket();

  const handleAddToBasket = () => {
    actions.addToBasket(data);
    // api call
  };
  return (
    <div
      className="flex flex-col gap-3 bg-white my-3
    rounded-lg
    p-4
      "
    >
      <img src={data.image} width={100} height={100} alt={data.title} />
      <h3>{data.title}</h3>
      <p>price: {data.price}</p>
      <button
        onClick={handleAddToBasket}
        className="border w-fit border-green-500 text-green-600 p-2 rounded-lg cursor-pointer"
      >
        add to basket
      </button>
    </div>
  );
};

export default ProductCard;
