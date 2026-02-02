// import ProductList from "../components/products/product-list";

import { useState } from "react";
import Button from "../components/common/button/button";
import Modal from "../components/common/modal";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  let x = [];
  x = x.map(() => {});
  return (
    <div>
      <Button onClick={handleClick}>show modal</Button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div>test</div>
      </Modal>
    </div>
  );
};

export default HomePage;
