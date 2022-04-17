import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { Device } from './Breakpoints.styles';

export const ContainerMonths = styled.div`
  grid-column: 4 / span 9;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 40px;
  overflow-y: auto;
  position: relative;
  padding-right: 40px;
`;

export const ContainerSelect = styled.div`
  grid-column: auto / span 9;
  align-self: start;
  margin-bottom: 28px;
  position: sticky;
  top: 0;
  background: ${Theme.neutral[50]};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 0 12px;
  z-index: 200;
`;

export const CardMonth = styled.div`
  grid-column: auto / span 3;
  width: 100%;
  height: 232px;
  justify-self: flex-start;
  margin-bottom: 28px;
  align-self: start;
  padding: 20px 20px 24px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  background: ${(props) =>
    props.current ? Theme.neutral['000'] : Theme.neutral[100]};
`;

export const CardMonthHeader = styled.div`
  width: 100%;
`;

export const CardMonthFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
