import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';
import dashboardIllustration from '../images/DashboardIllustration.svg';

export const Summary = styled.div`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  justify-content: space-between;
  background: ${Theme.neutral[50]};
`;
