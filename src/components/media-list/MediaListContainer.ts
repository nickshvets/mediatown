import styled from 'styled-components';
import theme from '../../theme';

const MediaListContainer = styled.div`
  margin-top: 12px;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.s}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${theme.breakpoints.m}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default MediaListContainer;
