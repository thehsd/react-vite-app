import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

const ReactPortal = ({ children, id = "portal" }) => {
  const [element, setElement] = useState(null);
  useLayoutEffect(() => {
    let el = document.getElementById(id);
    if (!el) {
      const wrapper = document.createElement("div");
      wrapper.setAttribute("id", id);
      document.body.appendChild(wrapper);
      el = wrapper;
    }
    setElement(el);
  }, [id]);
  if (element === null) return null;

  return createPortal(children, element);
};

export default ReactPortal;
