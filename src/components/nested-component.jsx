import { memo } from "react";

const NestedComponent = memo(({ count }) => {
  console.log("nested component :", count);

  return <div> in nested component, count: {count}</div>;
});

export default NestedComponent;
