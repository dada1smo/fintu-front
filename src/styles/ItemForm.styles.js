import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { Device } from './Breakpoints.styles';

export const ContainerItemForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 0 0;
  gap: 20px;
`;

export const ContainerItemFormFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormFieldThird = styled.div`
  width: 30%;
`;

export const FormFieldHalf = styled.div`
  width: 100%;
`;
