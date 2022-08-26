
const TableHead = ({ columns }) => {

  return (
    <thead>
      <tr>
        {columns.map(({ label, key }) => {
          
          return (
            <th key={label}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;