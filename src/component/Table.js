import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ caption, data, columns }) => {
  const [tableData, handleSorting] = useState(data, columns);
console.log("data",tableData);
  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData}} />
      </table>
    </>
  );
};

export default Table;