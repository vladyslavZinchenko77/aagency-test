import { FC } from 'react';
import { useParams } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsProfiles } from '../../data/columns';
import { initialDataProfiles } from '../../data/initialData';

const Profiles: FC = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Failed to retrieve account ID</div>;
  }

  const profileData = initialDataProfiles.find(
    (profile) => profile.accountId === parseInt(id)
  );

  const data = profileData ? [profileData] : [];

  return (
    <DefaultPage title={`Profiles of selected account ${id}`}>
      <TableCustom
        columns={columnsProfiles}
        data={data}
        path="profile/campaign/"
      />
    </DefaultPage>
  );
};

export default Profiles;
