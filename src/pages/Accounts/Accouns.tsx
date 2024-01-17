import { FC } from 'react';
import TableCustom from '../../components/TableCustom';
import './Accounts.scss';

const columns = [
  {
    key: 'accountId',
    label: 'Account ID',
    render: (item: any) => item.accountId,
  },
  {
    key: 'email',
    label: 'Email',
    render: (item: any) => item.email,
  },
  {
    key: 'authToken',
    label: 'Auth Token',
    render: (item: any) => item.authToken,
  },
  {
    key: 'creationDate',
    label: 'Creation Date',
    render: (item: any) => item.creationDate,
  },
];

const Accounts: FC = () => {
  const initialData = [
    {
      accountId: 1,
      email: 'example1@example.com',
      authToken: 'token1',
      creationDate: '2022-01-01',
    },
    {
      accountId: 2,
      email: 'example2@example.com',
      authToken: 'token2',
      creationDate: '2022-01-02',
    },
    {
      accountId: 3,
      email: 'example3@example.com',
      authToken: 'token3',
      creationDate: '2022-01-03',
    },
    {
      accountId: 4,
      email: 'example4@example.com',
      authToken: 'token4',
      creationDate: '2022-01-04',
    },
    {
      accountId: 5,
      email: 'example5@example.com',
      authToken: 'token5',
      creationDate: '2022-01-05',
    },
    {
      accountId: 6,
      email: 'example6@example.com',
      authToken: 'token6',
      creationDate: '2022-01-06',
    },
    {
      accountId: 7,
      email: 'example7@example.com',
      authToken: 'token7',
      creationDate: '2022-01-07',
    },
  ];

  return (
    <div className="accounts">
      <h2 className="accounts__title">Accounts</h2>
      <TableCustom
        columns={columns}
        totalItems={initialData.length}
        data={initialData}
      />
    </div>
  );
};

export default Accounts;
