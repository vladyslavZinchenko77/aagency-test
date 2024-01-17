import { FC } from 'react';
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
}

const TableCustom: FC<TableCustomProps> = ({
  columns,
  data,
  path,
  isClicableRow,
}) => {
  const navigate = useNavigate();

  const handleRowClick = (item: any) => {
    navigate(`${path}${item[columns[0].key]}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
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
  );
};

export default TableCustom;
