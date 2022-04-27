import styled from 'styled-components';
import { Device } from './Breakpoints.styles';

export const Logo = styled.img`
  width: 88px;
  height: 36px;
  margin: 16px 0;
  cursor: pointer;

  @media ${Device.laptopL} {
    width: 68px;
    height: 28px;
    margin: 20px 0;
  }
`;
