import { useCallback, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ caption, data, columns }) => {
  const [tableData, settabledata] = useState(data);
  const [column, setcolumn] = useState(columns)
console.log("data1",data, tableData);
useEffect(() => {
  //console.log("test2",data1, columnRef )
  settabledata(data);
  setcolumn(columns);
},[data] )
const handleSorting = useCallback((columnRef, data1)  => {
  console.log("test2",data1, columnRef )
  settabledata(data1);
  setcolumn(columnRef);
})
  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead {...{ column, tableData, filterdata : {handleSorting} }} />
        <TableBody {...{ column, tableData}} />
      </table>
    </>
  );
};

export default Table;