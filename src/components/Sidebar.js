import { ButtonPill, ButtonUnderlined } from '../styles/Button.styles';
import { Logo } from '../styles/Logo.styles';
import {
  SidebarContainer,
  SidebarContent,
  SidebarDashboard,
  SidebarUserMenu,
  SidebarWallet,
} from '../styles/Sidebar.styles';
import logo from '../images/Logo.svg';
import { MenuHorizontalIcon, SavingsIcon, WalletIcon } from '../images/Icons';
import { Label, Value } from '../styles/Typography.styles';
import { Summary } from '../styles/Summary.styles';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import useUser from '../providers/user.provider';
import { Skeleton } from './Loading';
import useFinances from '../providers/finances.provider';
import { formatCurrency } from '../utils/format.utils';
import { useNavigate } from 'react-router';

export default function Sidebar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userSavings, setUserSavings] = useState(0);
  const [loadingUserSavings, setLoadingUserSavings] = useState(false);
  const { logout, username } = useUser();
  const { getSavings } = useFinances();

  const navigate = useNavigate();

  const userActions = [
    {
      label: 'Sair',
      action: () => {
        logout();
        setUserMenuOpen(!userMenuOpen);
      },
    },
  ];

  const getUserSavings = async () => {
    try {
      setLoadingUserSavings(true);
      const response = await getSavings();
      setUserSavings(response.data);
      setLoadingUserSavings(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserSavings();
  }, []);

  return (
    <SidebarDashboard>
      <SidebarContainer>
        <Logo src={logo} alt="Fintu" />
        <SidebarUserMenu>
          <ButtonPill onClick={() => setUserMenuOpen(!userMenuOpen)}>
            {username} <MenuHorizontalIcon />
          </ButtonPill>
          <Menu
            open={userMenuOpen}
            setOpen={setUserMenuOpen}
            items={userActions}
          />
        </SidebarUserMenu>
        <SidebarWallet>
          <Label>Balanço</Label>
          {loadingUserSavings ? (
            <Skeleton height="40px" />
          ) : (
            <Summary>
              <SavingsIcon />
              <Value>{formatCurrency(userSavings)}</Value>
            </Summary>
          )}
        </SidebarWallet>
        <SidebarContent>
          <ButtonUnderlined onClick={() => navigate('/dashboard/savings')}>
            Economias
          </ButtonUnderlined>
          <ButtonUnderlined>Categorias</ButtonUnderlined>
        </SidebarContent>
      </SidebarContainer>
    </SidebarDashboard>
  );
}
