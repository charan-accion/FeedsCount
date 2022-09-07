

const TableBody = ({ tableData, columnData }) => {
  let tabledata = [];
  tableData?.map((a, b) => {
    a?.data?.length ? a.data.map((x, y) => {
      tabledata.push(x);
    }) : tabledata.push(a)
  })
  return (
    <tbody>
      {tabledata.map((tabledata1, key) => {
        return (
          <tr key={key}>
            {columnData.map(({ accessor }) => {
              const tData = tabledata1[accessor] ? tabledata1[accessor] : "——";
              return <td>{tData}</td>;

            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;