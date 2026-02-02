// import { useMemo, useState } from "react";
// import ListParams from "../components/ListParams";
// const getParams = (text) => {
//   if (text.length < 2) {
//     return [...text];
//   }
//   const params = [];
//   const letters = [...text];
//   letters.forEach((letter, index) => {
//     const without = [...letters];
//     without.splice(index, 1);
//     const rest = getParams(without);
//     rest.forEach((el) => {
//       params.push(letter + el);
//     });
//   });
//   return params;
// };

// const PerformancePage = () => {
//   const [letters, setLetters] = useState("");
//   const [showList, setShowList] = useState(true);
//   const handleChange = (e) => {
//     setLetters(e.target.value);
//   };
//   console.time("invoke getParams");
//   const memoList = useMemo(() => getParams(letters), [letters]);
//   console.timeEnd("invoke getParams");
//   console.log(memoList.length);

//   return (
//     <div className="bg-white p-4">
//       <button
//         className="border border-gray-600 p-2 m-2"
//         onClick={() => setShowList(!showList)}
//       >
//         toggle show List
//       </button>
//       <input
//         type="text"
//         onChange={handleChange}
//         placeholder="enter something"
//         className="border border-gray-300 rounded-md p-3 m-3"
//       />

//       {showList && <ListParams dataList={memoList} />}
//     </div>
//   );
// };
// export default PerformancePage;

import NestedComponent from "../components/nested-component";
import { useCallback, useState } from "react";

const PerformancePage = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const x = 10;
  const callback = useCallback(() => {
    console.log("callback");
  }, []);
  return (
    <div>
      <h1>Performance Page</h1>
      <h3>toggle: {toggle ? "true" : "false"}</h3>
      <button
        onClick={() => setToggle(!toggle)}
        className="border cursor-pointer border-gray-600 p-2 m-2"
      >
        toggle
      </button>
      <br />
      <button
        onClick={() => setCount(count + 1)}
        className="border cursor-pointer border-gray-600 p-2 m-2"
      >
        count plus
      </button>
      <NestedComponent count={count} callback={callback} />
    </div>
  );
};
export default PerformancePage;
// react compiler
