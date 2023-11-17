import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  padding: 12px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${theme.breakpoints.s}) {
    max-width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints.m}) {
    max-width: 100%;
  }

  @media screen and (min-width: ${theme.breakpoints.xl}) {
    max-width: 1200px;
  }
`;

export default Container;
