import styled from 'styled-components';
import { Theme } from './Theme.styles';
import homeIllustration from '../images/HomeIllustration.svg';
import { Device } from './Breakpoints.styles';

export const BackgroundHome = styled.div`
  grid-column: 1 / span 12;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 32px 0;
  display: flex;
  align-items: flex-end;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${Theme.neutral[600]};
    left: 0;
  }

  @media ${Device.tablet} {
    grid-column: 1 / span 4;
  }
`;

export const IllustrationHome = styled.div`
  background: url(${homeIllustration});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  position: relative;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 40%;

  @media ${Device.laptop} {
    width: 50%;
  }

  @media ${Device.tablet} {
    width: 60%;
    height: 60%;
  }

  @media ${Device.mobileL} {
    width: 100%;
    height: 60%;
  }
`;

export const CardHome = styled.div`
  grid-column: ${(props) => (props.login ? '5 / span 4' : '4 / span 6')};
  background: ${Theme.neutral['000']};
  position: relative;
  padding: 52px 60px;
  height: auto;
  align-self: center;
  overflow: auto;

  @media ${Device.laptopL} {
    grid-column: ${(props) => (props.login ? '4 / span 6' : '3 / span 8')};
  }

  @media ${Device.laptop} {
    grid-column: ${(props) => (props.login ? '3 / span 8' : '2 / span 10')};
  }

  @media ${Device.tablet} {
    grid-column: 1 / span 4;
  }

  @media ${Device.mobileL} {
    padding: 16px 20px 28px;
  }
`;

export const CardHomeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 32px 0;
  gap: 20px;
`;

export const CardHomeActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
