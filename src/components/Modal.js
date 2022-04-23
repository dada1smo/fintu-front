import { AnimatePresence } from 'framer-motion';
import { DismissIcon } from '../images/Icons';
import { ButtonIcon } from '../styles/Button.styles';
import {
  ContainerModal,
  ContainerModalHeader,
  OverlayModal,
  WrapperModal,
} from '../styles/Modal.styles';
import { H3 } from '../styles/Typography.styles';

export default function Modal({ open, setOpen, title, children }) {
  const animationVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.12,
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.12, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <WrapperModal key="modal" {...animationVariants}>
          <ContainerModal>
            <ContainerModalHeader>
              <H3>{title}</H3>
              <ButtonIcon size="lg" onClick={() => setOpen(!open)}>
                <DismissIcon />
              </ButtonIcon>
            </ContainerModalHeader>
            {children}
          </ContainerModal>
          <OverlayModal onClick={() => setOpen(!open)} />
        </WrapperModal>
      )}
    </AnimatePresence>
  );
}
