import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar';

const AuthLayout = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
