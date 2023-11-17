import styled from 'styled-components';
import theme from '../../theme';

const MediaContainer = styled.div<{ backgroundUrl?: string }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  padding: 12px;
  box-sizing: border-box;

  background-image: linear-gradient(
      45deg,
      rgba(22, 22, 22, 0.96) 60%,
      transparent 80%
    ),
    url(${(props) =>
      props.backgroundUrl ||
      'https://free4kwallpapers.com/uploads/originals/2015/12/16/the-evil-within-2014-game-wallpaper.jpg'});

  background-size: cover;
  background-position: center;
  border-bottom: 1px solid ${theme.palette.secondary.light};
  border: 1px solid ${theme.palette.secondary.light};
`;

export default MediaContainer;
