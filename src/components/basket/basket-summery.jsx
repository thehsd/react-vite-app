import useBasket from "../../store/basket";

const BasketSummery = () => {
  const { invoice } = useBasket();
  return (
    <div className="bg-white p-4 ">
      totalPrice of basket: {invoice.totalPrice}
    </div>
  );
};
export default BasketSummery;
