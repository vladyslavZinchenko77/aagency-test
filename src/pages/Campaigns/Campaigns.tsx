import { FC } from 'react';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsCampaign } from '../../data/columns';
import { initialDataCampaings } from '../../data/initialData';

const Campaigns: FC = () => {
  return (
    <DefaultPage title="Campaigns of selected profile">
      <TableCustom
        columns={columnsCampaign}
        data={initialDataCampaings}
        totalItems={initialDataCampaings.length}
      />
    </DefaultPage>
  );
};

export default Campaigns;
