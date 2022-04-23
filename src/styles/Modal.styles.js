import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';
import { rgba } from 'polished';
import { motion } from 'framer-motion';

export const OverlayModal = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const WrapperModal = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba(`${Theme.neutral[900]}`, 0.4)};
  transition: 0;
`;

export const ContainerModal = styled(motion.div)`
  background: ${Theme.neutral['000']};
  width: auto;
  min-width: 32vw;
  max-width: 60vw;
  position: relative;
  padding: 20px 24px;
  z-index: 104;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${Device.laptopL} {
    min-width: 44vw;
    max-width: 68vw;
  }

  @media ${Device.laptop} {
    min-width: 60vw;
    max-width: 68vw;
  }

  @media ${Device.tablet} {
    min-width: 92vw;
    max-width: 96vw;
  }
`;

export const ContainerModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
