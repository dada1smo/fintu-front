import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { motion } from 'framer-motion';
import { Device } from './Breakpoints.styles';

export const BackdropSelect = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const DropdownSelect = styled.div`
  background: ${(props) =>
    props.open ? `${Theme.green[50]}` : `${Theme.neutral[50]}`};
  outline: none;
  border: ${(props) =>
    props.open
      ? `1px solid ${Theme.green[500]}`
      : `1px solid ${Theme.neutral[600]}`};
  font-size: 16px;
  padding: 12px 12px;
  color: ${Theme.neutral[600]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  transition: 0.1s;
  cursor: pointer;
  max-height: 46px;
  transition: 0.32s;

  &:hover {
    background: ${Theme.green[50]};
    border: 1px solid ${Theme.green[500]};
  }

  img {
    width: 20px;
    height: 20px;
    transform: ${(props) => (props.open ? 'rotate(-180deg)' : 'none')};
    transition: 0.32s;
  }
`;

export const ContainerSelect = styled(motion.div)`
  background: ${Theme.neutral['000']};
  width: calc(100% + 2px);
  position: absolute;
  z-index: 104;
  top: 100%;
  left: -1px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${Theme.neutral['600']};
  box-shadow: 0px 0px 24px 0px ${Theme.neutral[300]};

  @media ${Device.tablet} {
    bottom: ${(props) => (props.bottom ? '100%' : 'auto')};
    top: ${(props) => (props.bottom ? 'auto' : '100%')};
  }
`;

export const ListSelect = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin: 0;
  list-style-type: none;
  max-height: 20vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Theme.neutral[200]};
    border-radius: 0;
  }
`;

export const ItemSelect = styled.li`
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
