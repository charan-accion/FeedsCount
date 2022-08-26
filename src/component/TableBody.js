

const TableBody = ({ data, columns }) => {
    return (
      <tbody>
        {data.map((data1,key) => {
          //console.log(tabledata,key);
          //data1.data.map((tabledata,key) => {
          return (
            <tr key={key}>
              {columns.map(({ accessor }) => {
                //console.log("abc",tabledata,key)
                 // console.log("abc",data1,key)
                const tData = data1[accessor] ? data1[accessor] : "——";
                console.log(tData)
                //<td>{tData}<td>
                return <td key={accessor}>{tData}</td>;
                
                                
              })}
            </tr>
          );
       // })
        })}
      </tbody>
    );
  }
  
  export default TableBody;