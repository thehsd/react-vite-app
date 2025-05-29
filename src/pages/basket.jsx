import BasketProductsList from "../components/basket/basket-priducts-list";
import BasketSummery from "../components/basket/basket-summery";

const BasketPage = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <BasketSummery />
      <BasketProductsList />
    </div>
  );
};

export default BasketPage;
