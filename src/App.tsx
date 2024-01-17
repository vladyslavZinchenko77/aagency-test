import { FC } from 'react';
import Header from './components/Header';
import TableCustom from './components/TableCustom';
import Footer from './components/Footer';

import './App.scss';

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

const App: FC = () => {
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
  ];

  return (
    <>
      <Header />
      <main>
        <TableCustom columns={columns} totalItems={20} data={initialData} />
      </main>
      <Footer />
    </>
  );
};

export default App;
