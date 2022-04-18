import styled from 'styled-components';
import { Theme } from './Theme.styles';
import { Device } from './Breakpoints.styles';

export const TagCategory = styled.div`
  padding: 0 8px;
  background: ${(props) => props.color};
  display: inline-flex;
`;

export const NameCategory = styled.div`
  font-size: 12px;
  line-height: 24px;
`;
