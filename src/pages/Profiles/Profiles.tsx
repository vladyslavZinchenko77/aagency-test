import { FC } from 'react';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsProfiles } from '../../data/columns';
import { initialDataProfiles } from '../../data/initialData';

const Profiles: FC = () => {
  return (
    <DefaultPage title="Profiles of selected account">
      <TableCustom
        columns={columnsProfiles}
        data={initialDataProfiles}
        totalItems={initialDataProfiles.length}
      />
    </DefaultPage>
  );
};

export default Profiles;
