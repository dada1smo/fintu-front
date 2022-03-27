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

  &::placeholder {
    color: ${Theme.neutral[500]};
  }

  &:focus {
    background: ${Theme.green[50]};
    border-bottom: 1px solid ${Theme.green[500]};
  }
`;

export const InputFlex = styled.div`
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
