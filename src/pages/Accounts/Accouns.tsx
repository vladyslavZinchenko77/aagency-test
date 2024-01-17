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
        totalItems={initialDataAcounts.length}
        data={initialDataAcounts}
      />
    </DefaultPage>
  );
};

export default Accounts;
