const ListParams = ({ dataList }) => {
  return (
    <div>
      <ul>
        {dataList.map((item, index) => {
          return (
            <li key={index}>
              #{index + 1} : {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListParams;
