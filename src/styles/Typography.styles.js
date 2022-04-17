import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';

export const H1 = styled.h1`
  font-family: ${Theme.inter};
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 8px;
  color: ${Theme.green[700]};

  @media ${Device.laptopL} {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const H2 = styled.h2`
  font-family: ${Theme.inter};
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  color: ${Theme.neutral[600]};
`;

export const H3 = styled.h3`
  font-family: ${Theme.inter};
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  color: ${Theme.neutral[600]};
`;

export const Strong = styled.div`
  font-family: ${Theme.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: ${Theme.neutral[600]};
`;

export const Value = styled.div`
  font-family: ${Theme.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: ${(props) => (props.negative ? Theme.red[900] : Theme.neutral[600])};
`;

export const Label = styled.span`
  font-family: ${Theme.inter};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${Theme.green[700]};
  text-transform: uppercase;
`;

export const Parapraph = styled.p`
  font-family: ${Theme.inter};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: ${Theme.neutral[600]};
`;

export const Subtitle = styled.p`
  font-family: ${Theme.inter};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: ${Theme.neutral[600]};
`;
