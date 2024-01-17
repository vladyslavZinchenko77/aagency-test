import { FC } from 'react';
import { useParams } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsProfiles } from '../../data/columns';

const Profiles: FC = () => {
  const { id } = useParams();

  const data = [{}];

  return (
    <DefaultPage title="Profiles of selected account">
      <TableCustom columns={columnsProfiles} data={data} />
    </DefaultPage>
  );
};

export default Profiles;
