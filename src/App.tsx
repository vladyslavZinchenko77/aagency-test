import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Accounts from './pages/Accounts';
import Campaigns from './pages/Campaigns';
import Profiles from './pages/Profiles';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Accounts />} path="/" />
          <Route element={<Accounts />} path="home" />
          <Route element={<Profiles />} path="profile/:id" />
          <Route
            element={<Campaigns />}
            path="profile/:id/profile/campaign/:id"
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
