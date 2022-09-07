import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ caption, data, columns }) => {
  //const [tableData, handleSortingChange] = useState(data, columns);
//console.log("data",data, tableData);
  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead {...{ columns, data }} />
        <TableBody {...{ columns, data}} />
      </table>
    </>
  );
};

export default Table;