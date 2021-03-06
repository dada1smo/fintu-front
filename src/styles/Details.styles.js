import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { Device } from './Breakpoints.styles';
import { motion } from 'framer-motion';

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

  @media ${Device.tablet} {
    grid-column: 1 / span 4;
    padding: 24px 0 4px 16px;
    margin-right: 0;
  }
`;

export const ContainerDetailsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${Device.tablet} {
    padding-right: 16px;
  }
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
  flex: ${(props) => (props.fullHeight ? '1 1 auto' : '0 0 auto')};

  @media ${Device.tablet} {
    display: block;
    overflow: auto;
    height: auto;
    flex: 1 1 100%;
    padding-bottom: 60px;
    padding-right: 16px;

    &::-webkit-scrollbar {
      width: 12px;
      height: 100%;
    }

    &::-webkit-scrollbar-thumb {
      background: ${Theme.neutral[200]};
      border-radius: 0;
    }
  }
`;

export const ColumnDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: ${(props) => (props.overflow ? '20px' : '0')};
  overflow-y: ${(props) => (props.overflow ? 'auto' : 'hidden')};
  position: relative;

  &::-webkit-scrollbar {
    width: 12px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Theme.neutral[200]};
    border-radius: 0;
  }

  @media ${Device.tablet} {
    overflow-y: hidden;
    height: auto;
  }
`;

export const ColumnDetailsHeader = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  padding: 12px 0;
  background: ${Theme.neutral['000']};
  z-index: 40;
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

export const ItemDetailsFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
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
  background: ${Theme.neutral['000']};
  border-top: 1px solid ${Theme.neutral[50]};
  box-shadow: 0px 0px 12px 0px ${Theme.neutral[200]};
  z-index: 44;
`;

export const ContainerDetailsFooterSummary = styled.div`
  display: flex;
  gap: 12px;
`;

export const ContainerBadge = styled(motion.div)`
  height: 24px;
  width: 24px;
  /* background: ${Theme.neutral['000']}; */
  display: inline-flex;
`;

export const TypeBadge = styled(motion.div)`
  color: ${Theme.green[700]};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 20px;
    width: 20px;
  }
`;
