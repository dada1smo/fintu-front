import { Wrapper } from '../styles/Layout.styles';
import { CardHome, LogoHome } from '../styles/Home.styles';
import Logo from '../images/Logo.svg';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {
  CardMonth,
  ContainerMonths,
  ContainerSelect,
} from '../styles/Dashboard.styles';
import { Input } from '../styles/Input.styles';

export default function Dashboard() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Wrapper dashboard={pathname === '/dashboard'}>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}
