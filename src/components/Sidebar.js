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
import { useState } from 'react';
import useUser from '../providers/user.provider';

export default function Sidebar() {
  const [userMenuOpen, setUserMenuOpen] = useState();
  const { logout } = useUser();

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

  return (
    <SidebarDashboard>
      <SidebarContainer>
        <Logo src={logo} alt="Fintu" />
        <SidebarUserMenu>
          <ButtonPill onClick={() => setUserMenuOpen(!userMenuOpen)}>
            dada1smo <MenuHorizontalIcon />
          </ButtonPill>
          <Menu
            open={userMenuOpen}
            setOpen={setUserMenuOpen}
            items={userActions}
          />
        </SidebarUserMenu>
        <SidebarWallet>
          <Label>Carteira</Label>
          <Summary>
            <WalletIcon />
            <Value>13.578,72</Value>
          </Summary>
        </SidebarWallet>
        <SidebarContent>
          <ButtonUnderlined>Editar carteira</ButtonUnderlined>
          <ButtonUnderlined>Ver itens recorrentes</ButtonUnderlined>
        </SidebarContent>
      </SidebarContainer>
    </SidebarDashboard>
  );
}
