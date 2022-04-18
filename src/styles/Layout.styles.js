import styled from 'styled-components';
import { Theme } from './Theme.styles';
import homeIllustration from '../images/HomeIllustration.svg';
import { Device } from './Breakpoints.styles';

export const Wrapper = styled.div`
  display: grid;
  padding: ${(props) => (props.dashboard ? '20px 0 20px 32px' : '20px 60px')};
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
  height: 100vh;
  overflow: hidden;
  position: relative;
  font-family: ${Theme.inter};

  @media ${Device.tablet} {
    grid-template-columns: repeat(4, 1fr);
    padding: 32px 12px;
  }
`;
