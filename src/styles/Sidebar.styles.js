import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';
import dashboardIllustration from '../images/DashboardIllustration.svg';
import { motion } from 'framer-motion';
import { rgba } from 'polished';

export const OverlaySidebar = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: stretch;
  z-index: 84;
  top: 0;
  left: 0;
  background: ${rgba(`${Theme.neutral[900]}`, 0.4)};
`;

export const SidebarDashboard = styled(motion.div)`
  grid-column: 1 / span 3;
  background: ${Theme.neutral['000']};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 200px;
    bottom: 0;
    left: 0;
    background: url(${dashboardIllustration});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  @media ${Device.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 60vw;
    z-index: 88;
    transform: 'translateX(-80vw)';
    transition: 0;
  }

  @media ${Device.laptopL} {
    &::after {
      height: 120px;
    }
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 20px;
  gap: 28px;
  background: ${Theme.neutral['000']};
  position: relative;
  z-index: 12;
`;

export const SidebarUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarWallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
