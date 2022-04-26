import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ContainerBadge, TypeBadge } from '../styles/Details.styles';

export default function RecurringBadge() {
  const [showTooltip, setShowTooltip] = useState(false);

  const animationVariants = {
    initial: {
      width: 20,
    },
    animate: {
      width: 'auto',
      transition: {
        duration: 0.32,
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },
    exit: {
      width: 20,
      transition: { duration: 0.32, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence>
      <ContainerBadge
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <TypeBadge key="full" {...animationVariants}>
            Recorrente
          </TypeBadge>
        )}
        {!showTooltip && (
          <TypeBadge key="simple" {...animationVariants}>
            R
          </TypeBadge>
        )}
      </ContainerBadge>
    </AnimatePresence>
  );
}
