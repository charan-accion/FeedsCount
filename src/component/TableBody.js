

const TableBody = ({ tableData, columnData }) => {
  console.log("tabledata",tableData)
  let tabledata = [];
  tableData?.map((a, b) => {
    a?.feedData?.length ? a.feedData.map((x, y) => {
      tabledata.push(x);
    }) : tabledata.push(a)
  })
  return (
    <tbody>
      {tabledata.map((tabledata1, key) => {
        return (
          <tr key={key}>
            {columnData.map(({ accessor }) => {
              let tData;
              if (accessor === "feedcount")
              tData = tabledata1[accessor] ? tabledata1[accessor] : 0;
              else
              tData = tabledata1[accessor] ? tabledata1[accessor] : "——";
              return <td>{tData}</td>;

            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;