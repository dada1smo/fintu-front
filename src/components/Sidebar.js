import { ButtonPill, ButtonUnderlined } from '../styles/Button.styles';
import { Logo } from '../styles/Logo.styles';
import {
  OverlaySidebar,
  SidebarContainer,
  SidebarContent,
  SidebarDashboard,
  SidebarUserMenu,
  SidebarWallet,
} from '../styles/Sidebar.styles';
import logo from '../images/Logo.svg';
import { MenuHorizontalIcon, SavingsIcon } from '../images/Icons';
import { Label, Value } from '../styles/Typography.styles';
import { Summary } from '../styles/Summary.styles';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import useUser from '../providers/user.provider';
import { Skeleton } from './Loading';
import useFinances from '../providers/finances.provider';
import { formatCurrency } from '../utils/format.utils';
import { useNavigate } from 'react-router';
import useWindowSize from '../hooks/use-window-size';
import { ScreenSize } from '../styles/Breakpoints.styles';
import useSidebar from '../providers/sidebar.provider';
import { AnimatePresence } from 'framer-motion';

export default function Sidebar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userSavings, setUserSavings] = useState(0);
  const [loadingUserSavings, setLoadingUserSavings] = useState(false);
  const { logout, username, showOnboarding, setShowOnboarding } = useUser();
  const { getSavings } = useFinances();

  const screenSize = useWindowSize();
  const navigate = useNavigate();
  const { responsiveSidebar, setResponsiveSidebar } = useSidebar();

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

  const animationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.24,
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.24, ease: 'easeInOut' },
    },
  };

  const slideVariants = {
    initial: {
      transform: 'translateX(-80vw)',
    },
    animate: {
      transform: 'translateX(0%)',
      transition: {
        duration: 0.24,
        ease: 'easeInOut',
      },
    },
    exit: {
      transform: 'translateX(-80vw)',
      transition: { duration: 0.24, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence>
      {responsiveSidebar && (
        <SidebarDashboard key="sidebar" {...slideVariants}>
          <SidebarContainer>
            <Logo
              src={logo}
              alt="Fintu"
              onClick={() => navigate('/dashboard')}
            />
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
              <ButtonUnderlined onClick={() => navigate('/dashboard')}>
                Visão geral
              </ButtonUnderlined>
              <ButtonUnderlined onClick={() => navigate('/dashboard/savings')}>
                Economias
              </ButtonUnderlined>
              <ButtonUnderlined
                onClick={() => navigate('/dashboard/categories')}
              >
                Categorias
              </ButtonUnderlined>
              <ButtonUnderlined
                onClick={() => setShowOnboarding(!showOnboarding)}
              >
                Como funciona
              </ButtonUnderlined>
            </SidebarContent>
          </SidebarContainer>
        </SidebarDashboard>
      )}
      {responsiveSidebar && screenSize.width < ScreenSize.tablet && (
        <OverlaySidebar
          key="overlay"
          {...animationVariants}
          onClick={() => setResponsiveSidebar(!responsiveSidebar)}
        />
      )}
    </AnimatePresence>
  );
}
