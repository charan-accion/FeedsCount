import { useState } from "react";
import Table from "./Table";
import {AiOutlineUp, AiOutlineDown } from 'react-icons/ai';


const TableHead = ({ columns, data }) => {
  const sorting = (accessor, tabledata) => {
    console.log("test1",tabledata, accessor )
    if(accessor === "FeedName")
    return tabledata.sort((a, b) => a.feedname.toLowerCase() < b.feedname.toLowerCase() ? -1 : 1);
    else if(accessor === "FeedDate")
    return tabledata.sort((a, b) => a.date.toLowerCase() < b.date.toLowerCase() ? -1 : 1);
    else if(accessor === "FeedCount")
    return tabledata.sort((a, b) => a.feedcount - b.feedcount)
    //console.log("test2",tabledata )
  }
  const handleSortingChange = (accessor, tableData) => {
    
    //console.log("sort", accessor, data);
    let tabledata =[];
    tableData.map((a,b) => {
      a.data.map((x,y) => {
      tabledata.push(x);
    })
    })
    sorting(accessor, tabledata);
    //Table("", tabledata,columns);
    console.log("test2",tabledata )
   };

  return (
    <thead>
      <tr>
        {columns.map(({ label, key }) => {
          
          return (
            //<th key={label} onClick={() => handleSortingChange(label, data)}>
             // {label}
           // </th>
            
            <th key={label}> 
            <div className='th-sorting'>{label} 
            <div className='th-sort-icon'>
            <AiOutlineUp onClick={() => handleSortingChange(label, data)} className='srt-icon' />
            <AiOutlineDown onClick className='srt-icon' />
            </div></div></th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;