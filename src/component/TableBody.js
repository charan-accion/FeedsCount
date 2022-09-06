

const TableBody = ({ tableData, columns }) => {
  let tabledata =[];
  tableData.map((a,b) => {
    a.data.map((x,y) => {
    tabledata.push(x);
  })
  })
  console.log("test",tabledata)
    return (
      <tbody>
        {tabledata.map((tabledata1,key) => {
          return (
            <tr key={key}>
              {columns.map(({ accessor }) => {
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