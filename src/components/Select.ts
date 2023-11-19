import styled from 'styled-components';
import theme from '../theme';

const Select = styled.select`
  background: ${theme.palette.background.base};
  padding: ${theme.spacing(2)};
  border: none;
  color: ${theme.palette.text.primary};
`;

export default Select;
