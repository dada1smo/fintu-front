import styled from 'styled-components';
import { Theme } from './Theme.styles';
import homeIllustration from '../images/HomeIllustration.svg';
import { Device } from './Breakpoints.styles';

export const BackdropMenu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const AnchorMenu = styled.div`
  position: relative;
  height: 0;
`;

export const ContainerMenu = styled.div`
  background: ${Theme.neutral['000']};
  width: 200px;
  position: absolute;
  z-index: 104;
  left: 0;
  box-shadow: 0px 0px 24px 0px ${Theme.neutral[200]};
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin: 0;
  list-style-type: none;
`;

export const ItemMenu = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    background: ${Theme.green[50]};
  }
`;
