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
import { MenuHorizontalIcon, WalletIcon } from '../images/Icons';
import { Label, Value } from '../styles/Typography.styles';
import { Summary } from '../styles/Summary.styles';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import useUser from '../providers/user.provider';
import { Skeleton } from './Loading';
import useFinances from '../providers/finances.provider';
import { formatCurrency } from '../utils/format.utils';

export default function Sidebar() {
  const [userMenuOpen, setUserMenuOpen] = useState();
  const [userSavings, setUserSavings] = useState(0);
  const [loadingUserSavings, setLoadingUserSavings] = useState(false);
  const { logout, username } = useUser();
  const { getSavings } = useFinances();

  const userActions = [
    {
      label: 'Ver perfil',
      action: () => {
        console.log('saí');
        setUserMenuOpen(!userMenuOpen);
      },
    },
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
          <Label>Cofre</Label>
          {loadingUserSavings ? (
            <Skeleton height="44px" />
          ) : (
            <Summary>
              <WalletIcon />
              <Value>{formatCurrency(userSavings)}</Value>
            </Summary>
          )}
        </SidebarWallet>
        <SidebarContent>
          <ButtonUnderlined>Editar carteira</ButtonUnderlined>
          <ButtonUnderlined>Ver itens recorrentes</ButtonUnderlined>
        </SidebarContent>
      </SidebarContainer>
    </SidebarDashboard>
  );
}
