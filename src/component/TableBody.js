

const TableBody = ({ data , columns }) => {
  //console.log(data,columns)
  let tableData =[];
  data.map((a,b) => {
    a.data.map((x,y) => {
    tableData.push(x);
  })
  })
  //console.log("test",tableData)
    return (
      <tbody>
        {tableData.map((tabledata,key) => {
          return (
            <tr key={key}>
              {columns.map(({ accessor }) => {
                const tData = tabledata[accessor] ? tabledata[accessor] : "——";
                return <td>{tData}</td>;
                                
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default TableBody;