import { useState } from "react";
import Table from "./Table";
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';


const TableHead = ({ columnData, tableData, filterdata }) => {
  const ascendingSorting = (accessor, tabledata) => {
    if (accessor === "FeedName")
      return tabledata.sort((a, b) => a.feedname.toLowerCase() < b.feedname.toLowerCase() ? -1 : 1);
    else if (accessor === "FeedDate")
      return tabledata.sort((a, b) => a.date.toLowerCase() < b.date.toLowerCase() ? -1 : 1);
    else if (accessor === "FeedCount")
      return tabledata.sort((a, b) => a.feedcount - b.feedcount);
  }
  const descendingSorting = (accessor, tabledata) => {
    if (accessor === "FeedName")
      return tabledata.sort((a, b) => a.feedname.toLowerCase() > b.feedname.toLowerCase() ? -1 : 1);
    else if (accessor === "FeedDate")
      return tabledata.sort((a, b) => a.date.toLowerCase() > b.date.toLowerCase() ? -1 : 1);
    else if (accessor === "FeedCount")
      return tabledata.sort((a, b) => b.feedcount - a.feedcount);
  }
  const handleSortingChange = (accessor, tableData,sortValue) => {
    console.log(sortValue)
    let tabledata = [];
    tableData.map((a, b) => {
      a?.data?.length ? a.data.map((x, y) => {
        tabledata.push(x);
      }) : tabledata.push(a);
    })
    if(sortValue === "asc")
    ascendingSorting(accessor, tabledata);
    else
    descendingSorting(accessor, tabledata);
    filterdata.handleSorting(columnData, tabledata);
  };

  return (
    <thead>
      <tr>
        {columnData.map(({ label, key }) => {

          return (
            //<th key={label} onClick={() => handleSortingChange(label, data)}>
            // {label}
            // </th>

            <th key={label}>
              <div className='th-sorting'>{label}
                <div className='th-sort-icon'>
                  <AiOutlineUp onClick={() => handleSortingChange(label, tableData,"asc")} className='srt-icon' />
                  <AiOutlineDown onClick={() => handleSortingChange(label, tableData,"desc")} className='srt-icon' />
                </div></div></th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;