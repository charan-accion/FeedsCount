

const TableBody = ({ data, columns }) => {
    return (
      <tbody>
        {data.map((data1,key) => {
          return (
            <tr key={key}>
              {columns.map(({ accessor }) => {
                const tData = data1[accessor] ? data1[accessor] : "——";
                return <td key={accessor}>{tData}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default TableBody;