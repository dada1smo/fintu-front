import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { Device } from './Breakpoints.styles';

export const ContainerDetails = styled.div`
  grid-column: 4 / span 9;
  overflow: hidden;
  position: relative;
  margin-right: 32px;
  background: ${Theme.neutral['000']};
  padding: 12px 28px 60px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  position: relative;
`;

export const ContainerDetailsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContainerDetailsTitle = styled.div`
  width: auto;
`;

export const ContainerDetailsActions = styled.div`
  display: flex;
  gap: 16px;
`;

export const RowDetails = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  overflow: hidden;
`;

export const ColumnDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: ${(props) => (props.overflow ? '20px' : '0')};
  overflow-y: ${(props) => (props.overflow ? 'auto' : 'hidden')};

  &::-webkit-scrollbar {
    width: 12px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Theme.neutral[200]};
    border-radius: 0;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  background: ${Theme.neutral[50]};
  gap: 4px;
`;

export const ItemDetailsStart = styled.div`
  display: flex;
  gap: 8px;

  button {
    margin-top: 2px;
  }
`;

export const ItemDetailsSummary = styled.div`
  width: auto;
`;

export const ContainerDetailsFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 28px;
  border-top: 1px solid ${Theme.neutral[50]};
  box-shadow: 0px 0px 12px 0px ${Theme.neutral[200]};
`;

export const ContainerDetailsFooterSummary = styled.div`
  display: flex;
  gap: 12px;
`;
