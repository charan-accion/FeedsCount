import { useState } from "react";
import Table from "./Table";

const TableHead = ({ columns, data }) => {
  const sorting = (tabledata) => {
    console.log("test1",tabledata )
    return tabledata.sort((a, b) => a.feedName.toLowerCase() < b.feedName.toLowerCase() ? -1 : 1)
    //console.log("test1",tabledata )
  }
  const handleSortingChange = (accessor, tableData) => {
    
    console.log("sort", accessor, data);
    let tabledata =[];
    data.map((a,b) => {
      a.data.map((x,y) => {
      tabledata.push(x);
    })
    })
    sorting(tabledata);
    //Table("", tabledata,columns);
   };

  return (
    <thead>
      <tr>
        {columns.map(({ label, key }) => {
          
          return (
            <th key={label} onClick={() => handleSortingChange(label, data)}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;