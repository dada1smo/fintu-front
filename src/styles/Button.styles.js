import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';

export const Button = styled.button`
  display: inline-flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  font-family: ${Theme.inter};
  font-weight: 600;
  font-size: 16px;
  transition: 0.3s;
  outline: 0;
  border: none;
  text-decoration: none;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  position: relative;
  color: ${Theme.neutral[600]};

  & img {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonPill = styled(Button)`
  padding: 6px 18px;
  border-radius: 444px;
  border: 1px solid ${Theme.green[100]};
  background: ${Theme.green[100]};

  &:hover {
    background: ${Theme.green[200]};
  }
`;

export const ButtonUnderlined = styled(Button)`
  padding: 6px 0;
  border-bottom: 1px solid ${Theme.neutral[600]};
  background: transparent;

  &:hover {
    color: ${Theme.green[700]};
    border-bottom: 1px solid ${Theme.green[500]};
  }
`;

export const ButtonIcon = styled(Button)`
  width: 24px;
  height: 24px;
  border-radius: 100%;

  &:hover {
    background: ${Theme.green[100]};
  }
`;
