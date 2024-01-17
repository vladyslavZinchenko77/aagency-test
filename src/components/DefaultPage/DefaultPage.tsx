import { FC } from 'react';

import './DefaultPage.scss';

interface DefaultPageProps {
  title: string;
  children: React.ReactNode;
}
const DefaultPage: FC<DefaultPageProps> = ({ title, children }) => {
  return (
    <div className="page">
      <h2 className="page__title">{title}</h2>
      {children}
    </div>
  );
};

export default DefaultPage;
