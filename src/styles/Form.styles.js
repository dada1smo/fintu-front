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
  font-family: ${Theme.inter};
  height: 44px;

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
  align-items: flex-start;

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

export const Radio = styled.input`
  background: ${Theme.neutral[200]};
  outline: none;
  border: none;
  border: 1px solid ${Theme.neutral[600]};
  color: ${Theme.neutral[600]};
  transition: 0.32s;
  appearance: none;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  font-family: ${Theme.inter};

  &:focus {
    background: ${Theme.green[50]};
  }

  &:checked {
    border: 6px solid ${Theme.green[500]};
  }
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  color: ${Theme.neutral[600]};
  margin-left: 4px;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FormGroupRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const InputCurrency = styled(Input)`
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const Feedback = styled.span`
  font-size: 12px;
  color: ${Theme.red[900]};
`;
