

const TableBody = ({ tableData , column }) => {
  console.log("abc",tableData,column)
  let tabledata =[];
  tableData?.map((a,b) => {
    console.log(a, "A",a.data)
    a?.data?.length ? a.data.map((x,y) => {
    tabledata.push(x);
  }): tabledata.push(a)
  })
  //console.log("test",tableData)
    return (
      <tbody>
        {tabledata.map((tabledata1,key) => {
          return (
            <tr key={key}>
              {column.map(({ accessor }) => {
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