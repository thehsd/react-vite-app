const Button = ({ children }) => {
  return (
    <button className="bg-gray-400 rounded-md text-white p-2 m-2">
      {children}
    </button>
  );
};

export default Button;
