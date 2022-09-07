import { useState } from "react";
import Table from "./Table";

const TableHead = ({ columns, data }) => {
  const sorting = (accessor, tabledata) => {
    console.log("test1",tabledata, accessor )
    if(accessor === "FeedName")
    tabledata.sort((a, b) => a.feedname.toLowerCase() < b.feedname.toLowerCase() ? -1 : 1);
    else if(accessor === "FeedDate")
    tabledata.sort((a, b) => a.date.toLowerCase() < b.date.toLowerCase() ? -1 : 1);
    else if(accessor === "FeedCount")
    tabledata.sort((a, b) => a.feedcount - b.feedcount)
    console.log("test2",tabledata )
  }
  const handleSortingChange = (accessor, tableData) => {
    
    //console.log("sort", accessor, data);
    let tabledata =[];
    tableData.map((a,b) => {
      a.data.map((x,y) => {
      tabledata.push(x);
    })
    })
    return sorting(accessor, tabledata);
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