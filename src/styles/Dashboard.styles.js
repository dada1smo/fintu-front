import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { Device } from './Breakpoints.styles';

export const ContainerMonths = styled.div`
  grid-column: 4 / span 9;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 24px;
  overflow-y: auto;
  position: relative;
  padding-right: 32px;

  &::-webkit-scrollbar {
    width: 12px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Theme.neutral[200]};
    border-radius: 0;
  }

  @media ${Device.tablet} {
    grid-column: 1 / span 4;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 12px 20px 12px;
  }
`;

export const ContainerSelect = styled.div`
  grid-column: auto / span 9;
  align-self: start;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  background: ${Theme.neutral[50]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 12px;
  z-index: 80;

  @media ${Device.tablet} {
    grid-column: 1 / span 4;
    top: 0;
    padding: 20px 0 8px;
    margin-bottom: 12px;
  }
`;

export const CardMonth = styled.div`
  grid-column: auto / span 3;
  width: 100%;
  height: 212px;
  justify-self: flex-start;
  margin-bottom: 28px;
  align-self: start;
  padding: 20px 20px 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) =>
    props.current ? Theme.neutral['000'] : Theme.neutral[100]};

  @media ${Device.tablet} {
    grid-column: 1 / span 4;
  }
`;

export const CardMonthHeader = styled.div`
  width: 100%;
`;

export const CardMonthFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ResponsiveActions = styled.div`
  display: flex;
  gap: 16px;
`;
