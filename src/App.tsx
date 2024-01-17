import { FC } from 'react';
import Header from './components/Header';
// import Accounts from './pages/Accounts';
// import Campaigns from './pages/Campaigns';
import Profiles from './pages/Profiles';
import Footer from './components/Footer';

import './App.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Accounts /> */}
        <Profiles />
      </main>
      <Footer />
    </>
  );
};

export default App;
