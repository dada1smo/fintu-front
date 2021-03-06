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
  transition: 0.32s;
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
  border: 1px solid
    ${(props) => (props.disabled ? Theme.neutral[100] : Theme.green[100])};
  background: ${(props) =>
    props.disabled ? Theme.neutral[100] : Theme.green[100]};

  &:hover {
    background: ${Theme.green[200]};
  }
`;

export const ButtonPillCaution = styled(ButtonPill)`
  border: 1px solid
    ${(props) => (props.disabled ? Theme.neutral[100] : Theme.red[100])};
  background: ${(props) =>
    props.disabled ? Theme.neutral[100] : Theme.red[100]};

  &:hover {
    background: ${Theme.red[200]};
  }
`;

export const ButtonUnderlined = styled(Button)`
  padding: 6px 0;
  border-bottom: 1px solid ${Theme.neutral[600]};
  background: transparent;
  text-align: right;

  &:hover {
    color: ${Theme.green[700]};
    border-bottom: 1px solid ${Theme.green[500]};
  }
`;

export const ButtonIcon = styled(Button)`
  width: ${(props) => (props.size === 'lg' ? '38px' : '24px')};
  height: ${(props) => (props.size === 'lg' ? '38px' : '24px')};
  border-radius: 100%;

  &:hover {
    background: ${Theme.green[100]};
  }
`;
