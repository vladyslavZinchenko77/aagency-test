// import { FC } from 'react';
// import { Table } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// interface Column {
//   key: string;
//   label: string;
//   render: (item: any) => React.ReactNode;
// }

// interface TableCustomProps {
//   columns: Column[];
//   data: any[];
//   path?: string;
//   isClicableRow: boolean;
// }

// const TableCustom: FC<TableCustomProps> = ({
//   columns,
//   data,
//   path,
//   isClicableRow,
// }) => {
//   const navigate = useNavigate();

//   const handleRowClick = (item: any) => {
//     navigate(`${path}${item[columns[0].key]}`);
//   };

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           {columns.map((column) => (
//             <th key={column.key}>{column.label}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr
//             key={index}
//             onClick={isClicableRow ? () => handleRowClick(item) : undefined}
//           >
//             {columns.map((column) => (
//               <td key={column.key}>{column.render(item)}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default TableCustom;

import { FC, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Column {
  key: string;
  label: string;
  render: (item: any) => React.ReactNode;
}

interface TableCustomProps {
  columns: Column[];
  data: any[];
  path?: string;
  isClicableRow: boolean;
  itemsPerPage?: number;
}

const TableCustom: FC<TableCustomProps> = ({
  columns,
  data,
  path,
  isClicableRow,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleRowClick = (item: any) => {
    navigate(`${path}${item[columns[0].key]}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              onClick={isClicableRow ? () => handleRowClick(item) : undefined}
            >
              {columns.map((column) => (
                <td key={column.key}>{column.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <ul className="pagination">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? 'active' : ''
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TableCustom;
