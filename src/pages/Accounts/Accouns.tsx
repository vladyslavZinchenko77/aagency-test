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
        path="/profile/id"
      />
    </DefaultPage>
  );
};

export default Accounts;
