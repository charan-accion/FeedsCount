import { useCallback, useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ caption, data, columns }) => {
  const [tableData, SetTableData] = useState(data);
  const [columnData, SetColumnData] = useState(columns);
  useEffect(() => {
    SetTableData(data);
    SetColumnData(columns);
  }, [data])
  const handleSorting = useCallback((columnRef, data1) => {
    SetTableData(data1);
    SetColumnData(columnRef);
  })
  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead {...{ columnData, tableData, filterdata: { handleSorting } }} />
        <TableBody {...{ columnData, tableData }} />
      </table>
    </>
  );
};

export default Table;