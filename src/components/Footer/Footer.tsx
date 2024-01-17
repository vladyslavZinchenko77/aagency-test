import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: FC = () => {
  return (
    <footer className="footer footer-add mt-auto py-3 bg-light">
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <span className="text-muted">© 2024 aagency. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
