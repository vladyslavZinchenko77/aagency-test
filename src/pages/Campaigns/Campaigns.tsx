// import { FC } from 'react';
// import { useParams } from 'react-router-dom';
// import DefaultPage from '../../components/DefaultPage';
// import TableCustom from '../../components/TableCustom';
// import { columnsCampaign } from '../../data/columns';
// import { initialDataCampaings } from '../../data/initialData';

// const Campaigns: FC = () => {
//   const { id } = useParams();

//   if (id === undefined) {
//     return <div>Failed to retrieve profile ID</div>;
//   }

//   const parsedId = parseInt(id, 10);

//   const campaignData = initialDataCampaings.filter(
//     (campaign) => campaign.profileId === parsedId
//   );

//   return (
//     <DefaultPage title={`Campaigns of selected profile ${id}`}>
//       <TableCustom
//         columns={columnsCampaign}
//         data={campaignData}
//         isClicableRow={false}
//       />
//     </DefaultPage>
//   );
// };

// export default Campaigns;

import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsCampaign } from '../../data/columns';
import { initialDataCampaings } from '../../data/initialData';
import { Button } from 'react-bootstrap';
import './Campaigns.scss';

const Campaigns: FC = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Failed to retrieve profile ID</div>;
  }

  const parsedId = parseInt(id, 10);

  const [sortedData, setSortedData] = useState(initialDataCampaings);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const campaignData = sortedData.filter(
    (campaign) => campaign.profileId === parsedId
  );

  return (
    <DefaultPage title={`Campaigns of selected profile ${id}`}>
      <div className="campaigns__btn-sort--wrap">
        <Button onClick={handleSort}>Sort by Date</Button>
      </div>
      <TableCustom
        columns={columnsCampaign}
        data={campaignData}
        isClicableRow={false}
      />
    </DefaultPage>
  );
};

export default Campaigns;
