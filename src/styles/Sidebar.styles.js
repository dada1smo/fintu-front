import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';
import dashboardIllustration from '../images/DashboardIllustration.svg';

export const SidebarDashboard = styled.div`
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
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 28px;
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
