import { FC, ReactNode, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';

interface TableColumn {
  key: string;
  label: string;
  render: (item: any) => ReactNode;
}

interface TableCustomProps {
  columns: TableColumn[];
  itemsPerPage?: number;
  totalItems: number;
  data: any[];
}

const TableCustom: FC<TableCustomProps> = ({
  columns,
  itemsPerPage = 5,
  totalItems,
  data: initialData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  const currentPageData = initialData.slice(startIndex, endIndex + 1);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.key}>{column.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="mt-3">
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        />
      </Pagination>
    </div>
  );
};

export default TableCustom;
