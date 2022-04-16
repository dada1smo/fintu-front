import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { rgba, linearGradient } from 'polished';
import { motion } from 'framer-motion';

export const LoadingPageOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${rgba(`${Theme.neutral[900]}`, 0.4)};
  z-index: 12000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderPage = styled(motion.div)`
  background: ${Theme.green[200]};
  width: 120px;
  height: 120px;
`;

export const SkeletonBase = styled(motion.div)`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  position: relative;
  background: ${Theme.neutral[200]};
  overflow: hidden;
`;

export const SkeletonShimmer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  transform: rotate(5deg) scale(2, 2);
  ${linearGradient({
    colorStops: [
      `rgba(0,0,0,0) 0%`,
      `${Theme.neutral[100]} 45%`,
      `${Theme.neutral[100]} 55%`,
      `rgba(0,0,0,0) 90%`,
    ],
    toDirection: 'to right',
    fallback: 'transparent',
  })};
`;
