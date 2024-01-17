import { FC } from 'react';
import Header from './components/Header';
import Accounts from './pages/Accounts';
import Footer from './components/Footer';

import './App.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Accounts />
      </main>
      <Footer />
    </>
  );
};

export default App;
