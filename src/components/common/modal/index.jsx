import { useRef } from "react";
import Button from "../button/button";
import ReactPortal from "./react-portal";
import useOutsideClick from "../../../hooks/useOutSideClick";

const Modal = ({ children, size = "", isVisible = false, onClose }) => {
  if (isVisible === false) return null;
  const modalRef = useRef(null);

  const handleClickOutSide = () => {
    onClose();
  };

  useOutsideClick(modalRef, handleClickOutSide);
  return (
    <ReactPortal>
      <div className="absolute w-full h-full bg-gray-900/50 top-0 flex justify-center items-center">
        <div
          ref={modalRef}
          className="bg-white md:w-1/3 md:h-1/4 w-full h-full "
        >
          {children}
          <br />
          <div>
            <Button onClick={onClose}>close Modal</Button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default Modal;
