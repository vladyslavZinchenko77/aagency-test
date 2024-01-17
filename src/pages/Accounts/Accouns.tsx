import { FC, useState } from 'react';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { initialDataAcounts } from '../../data/initialData';
import { columnsAcounts } from '../../data/columns';
import { Button } from 'react-bootstrap';

import './Accounts.scss';

const Accounts: FC = () => {
  const [sortedData, setSortedData] = useState(initialDataAcounts);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const dateA = new Date(a.creationDate).getTime();
      const dateB = new Date(b.creationDate).getTime();

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <DefaultPage title="Accounts">
      <div className="accounts__btn-sort--wrap">
        <Button onClick={handleSort}>Sort by Date</Button>
      </div>
      <TableCustom
        columns={columnsAcounts}
        data={sortedData}
        isClicableRow={true}
        path="/profile/"
      />
    </DefaultPage>
  );
};

export default Accounts;
