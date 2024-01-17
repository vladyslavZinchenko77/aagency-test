import { FC } from 'react';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { initialDataAcounts } from '../../data/initialData';
import { columnsAcounts } from '../../data/columns';

const Accounts: FC = () => {
  return (
    <DefaultPage title="Accounts">
      <TableCustom
        columns={columnsAcounts}
        data={initialDataAcounts}
        isClicableRow={true}
        path="/profile/"
      />
    </DefaultPage>
  );
};

export default Accounts;
