import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage';
import TableCustom from '../../components/TableCustom';
import { columnsCampaign } from '../../data/columns';
import { initialDataCampaings } from '../../data/initialData';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import './Campaigns.scss';

type Campaign = {
  campaignId: number;
  profileId: number;
  clicks: number;
  cost: number;
  date: string;
};

type CampaignWithIndex = Campaign & {
  [key: string]: number | string;
};

const Campaigns: FC = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Failed to retrieve profile ID</div>;
  }

  const parsedId = parseInt(id, 10);

  const [sortedData, setSortedData] =
    useState<CampaignWithIndex[]>(initialDataCampaings);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [minCost, setMinCost] = useState<number | ''>('');
  const [maxCost, setMaxCost] = useState<number | ''>('');

  const handleSort = (property: string) => {
    const sorted = [...sortedData].sort((a, b) => {
      const valueA = a[property] as number | string;
      const valueB = b[property] as number | string;

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      }

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return 0;
    });

    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleFilter = () => {
    const filtered = initialDataCampaings.filter((campaign) => {
      const cost = campaign.cost;

      if (minCost !== '' && cost < minCost) {
        return false;
      }

      if (maxCost !== '' && cost > maxCost) {
        return false;
      }

      return true;
    });

    setSortedData(filtered);
  };

  const campaignData = sortedData.filter(
    (campaign) => campaign.profileId === parsedId
  );

  return (
    <DefaultPage title={`Campaigns of selected profile ${id}`}>
      <Row className="mb-3">
        <Col sm={2}>
          <Form.Label className="mb-2">Filter by Cost:</Form.Label>
        </Col>
        <Col sm={4}>
          <FormControl
            placeholder="Min Cost"
            value={minCost}
            onChange={(e) =>
              setMinCost(
                e.target.value !== '' ? parseFloat(e.target.value) : ''
              )
            }
            className="mb-2"
          />
        </Col>
        <Col sm={4}>
          <FormControl
            placeholder="Max Cost"
            value={maxCost}
            onChange={(e) =>
              setMaxCost(
                e.target.value !== '' ? parseFloat(e.target.value) : ''
              )
            }
            className="mb-2"
          />
        </Col>
        <Col sm={2}>
          <Button onClick={handleFilter}>Apply Filter</Button>
        </Col>
      </Row>

      <div className="campaigns__btn-sort--wrap">
        <Button
          className="campaigns__btn-sort"
          onClick={() => handleSort('date')}
        >
          Sort by Date
        </Button>
        <Button
          className="campaigns__btn-sort"
          onClick={() => handleSort('cost')}
        >
          Sort by Cost
        </Button>
        <Button
          className="campaigns__btn-sort"
          onClick={() => handleSort('clicks')}
        >
          Sort by Clicks
        </Button>
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
