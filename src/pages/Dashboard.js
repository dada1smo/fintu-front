import { Wrapper } from '../styles/Layout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const { pathname } = useLocation();

  return (
    <Wrapper dashboard={pathname === '/dashboard'}>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}
