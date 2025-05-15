const ProductCard = ({ productData }) => {
  return (
    <div
      className="p-2 border border-gray-200 rounded-xs m-2 
    hover:shadow-lg hover:rounded-sm transition-all"
    >
      <img
        src={productData.image}
        alt={productData.title}
        width={100}
        height={100}
      />
      <h2 className="text-green-700 sm:text-blue-400">{productData.title}</h2>
      <p>price: {productData.price}$</p>
    </div>
  );
};

export default ProductCard;
