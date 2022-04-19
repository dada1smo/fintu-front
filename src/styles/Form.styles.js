import styled from 'styled-components';
import { Device } from './Breakpoints.styles';
import { Theme } from './Theme.styles';

export const Input = styled.input`
  background: ${Theme.neutral[50]};
  outline: none;
  border: none;
  border-bottom: 1px solid ${Theme.neutral[600]};
  font-size: 16px;
  padding: 12px 12px;
  color: ${Theme.neutral[600]};
  transition: 0.32s;

  &::placeholder {
    color: ${Theme.neutral[500]};
  }

  &:focus {
    background: ${Theme.green[50]};
    border-bottom: 1px solid ${Theme.green[500]};
  }
`;

export const InputLabel = styled.label`
  font-size: 12px;
  color: ${Theme.neutral[600]};
`;

export const FormFlex = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;

  & input {
    width: 100%;
  }

  @media ${Device.tablet} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Feedback = styled.span`
  font-size: 12px;
  color: ${Theme.red[900]};
`;
