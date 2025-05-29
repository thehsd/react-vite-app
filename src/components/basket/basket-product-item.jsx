import useBasket from "../../store/basket";

const BasketProductItem = ({ data }) => {
  const { actions } = useBasket();
  const handleRemoveFromBasket = () => {
    actions.removeFromBasket(data);
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
      <p>quantity: {data.quantity}</p>
      <button
        onClick={handleRemoveFromBasket}
        className="border w-fit border-red-500 text-red-600 p-2 rounded-lg cursor-pointer"
      >
        remove form basket
      </button>
    </div>
  );
};

export default BasketProductItem;
