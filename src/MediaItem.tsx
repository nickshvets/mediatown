import React from 'react';
import { H6, Button, MediaContainer, ButtonsContainer } from './components';

import { MediaType } from './types';
import { MediaTypeLabel } from './components/media/MediaTypeLabel';

interface MediaProps {
  onDelete: (id: number) => void;
  setModalProps: (props: { open: boolean; create?: boolean }) => void;
  setModalDeleteProps: (modalProps: { open: boolean }) => void;
  setMediaForm: (mediaItem: MediaType) => void;
  mediaItem: MediaType;
  image?: string;
}

const MediaItem = (props: MediaProps) => {
  const { mediaItem, setModalDeleteProps, setModalProps, setMediaForm } = props;
  const { image } = mediaItem;

  const handleEdit = () => {
    setModalProps({ open: true, create: false });
    setMediaForm(mediaItem);
  };

  const spanStyle: React.CSSProperties = {
    maxWidth: '50%',
    display: 'block',
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    marginBottom: '0.5rem',
  };

  return (
    <MediaContainer backgroundUrl={image}>
      <MediaTypeLabel type={mediaItem.type} style={spanStyle} />
      <H6 style={spanStyle}>{mediaItem.title}</H6>
      <span style={spanStyle}>Title: {mediaItem.title}</span>
      <span style={spanStyle}></span>
      <span style={spanStyle}>Release year: {mediaItem.releaseYear}</span>
      <span style={spanStyle}>Genre: {mediaItem.genre}</span>
      <div style={spanStyle}>
        Rating:{' '}
        <span
          style={{
            backgroundColor: 'yellow',
            color: 'black',
            borderRadius: '3px',
            padding: '0 2px',
          }}
        >
          {mediaItem.rating}
        </span>
      </div>
      <ButtonsContainer>
        <Button onClick={handleEdit}>Edit</Button>
        <Button
          onClick={() => {
            setMediaForm(mediaItem);
            setModalDeleteProps({ open: true });
          }}
        >
          Delete
        </Button>
      </ButtonsContainer>
    </MediaContainer>
  );
};

export default MediaItem;
