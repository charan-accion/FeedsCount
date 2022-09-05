

const TableBody = ({ data, columns }) => {
    return (
      <tbody>
        {data.map((tabledata,key) => {
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