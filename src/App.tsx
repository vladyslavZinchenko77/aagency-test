import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const LazyAccounts = lazy(() => import('./pages/Accounts'));
const LazyCampaigns = lazy(() => import('./pages/Campaigns'));
const LazyProfiles = lazy(() => import('./pages/Profiles'));

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<LazyAccounts />} path="/" />
            <Route element={<LazyAccounts />} path="home" />
            <Route element={<LazyProfiles />} path="profile/:id" />
            <Route
              element={<LazyCampaigns />}
              path="profile/:id/profile/campaign/:id"
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
