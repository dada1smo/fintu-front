import {
  LoaderPage,
  LoadingPageOverlay,
  SkeletonBase,
  SkeletonShimmer,
} from '../styles/Loading.styles';
import { Theme } from '../styles/Theme.styles';

export const LoadingPage = () => {
  return (
    <LoadingPageOverlay
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <LoaderPage
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['0', '0', '50%', '50%', '0'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </LoadingPageOverlay>
  );
};

export const Skeleton = ({ width, height }) => {
  const gradientAnimation = {
    left: ['-200%', '-100%', '0%', '100%', '200%'],
  };

  return (
    <SkeletonBase width={width} height={height}>
      <SkeletonShimmer
        animate={gradientAnimation}
        transition={{
          duration: 3.2,
          ease: 'easeInOut',
          times: [0, 0.4, 0.8, 1.2],
          repeat: Infinity,
        }}
      />
    </SkeletonBase>
  );
};
