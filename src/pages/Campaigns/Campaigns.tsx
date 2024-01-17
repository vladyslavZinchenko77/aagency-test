import { FC } from 'react';
import { useParams } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsCampaign } from '../../data/columns';
import { initialDataCampaings } from '../../data/initialData';

const Campaigns: FC = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Failed to retrieve profile ID</div>;
  }

  const parsedId = parseInt(id, 10);

  const campaignData = initialDataCampaings.filter(
    (campaign) => campaign.profileId === parsedId
  );

  return (
    <DefaultPage title={`Campaigns of selected profile ${id}`}>
      <TableCustom columns={columnsCampaign} data={campaignData} />
    </DefaultPage>
  );
};

export default Campaigns;
