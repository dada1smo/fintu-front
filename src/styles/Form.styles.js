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

  @media ${Device.tablet} {
    font-size: 14px;
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
  background: ${Theme.neutral[50]};
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
  white-space: nowrap;

  @media ${Device.tablet} {
    font-size: 14px;
  }
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

export const HiddenCheckbox = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxCheck = styled.svg`
  display: inline-block;
  height: 20px;
  width: 20px;
  background: ${(props) =>
    props.checked ? Theme.green[500] : Theme.neutral[50]};
  border: ${(props) =>
    props.checked
      ? `1px solid ${Theme.green[500]}`
      : `1px solid ${Theme.neutral[600]}`};
  margin-right: 4px;
  transition: 0.24s;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Feedback = styled.span`
  font-size: 12px;
  color: ${Theme.red[900]};
`;
