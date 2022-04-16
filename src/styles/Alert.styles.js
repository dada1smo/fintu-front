import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';

export const Alert = styled.div`
  display: flex;
  padding: 12px 20px;
  gap: 8px;
  font-family: ${Theme.inter};
  font-size: 16px;
  line-height: 24px;

  & img {
    width: 24px;
    height: 24px;
  }
`;

export const AlertPositive = styled(Alert)`
  background: ${Theme.green[50]};
`;

export const AlertNegative = styled(Alert)`
  background: ${Theme.red[50]};
`;
