import React, { useEffect, ChangeEvent } from 'react';
import Input from '../Input';
import Button from '../Button';
import H4 from '../H4';
import { emptyMedia } from '../../types';
import Select from '../Select';
import theme from '../../theme';

interface MediaFormProps {
  modalProps: {
    open: boolean;
    create?: boolean;
  };
  mediaForm: {
    image?: string;
    title: string;
    type: string;
    genre: string;
    releaseYear?: number | undefined;
    rating?: number | undefined;
  };

}

export const MediaForm: React.FC<MediaFormProps> = ({
  modalProps,
  mediaForm,

}) => {
  const { open, create = false } = modalProps;
  const { image } = mediaForm;
  // Add styles to center the modal and darken the background
  const modalStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '20rem',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    zIndex: 999,
    background: '#161616',
    boxShadow: '4px 4px 194px 107px rgba(0,0,0,0.98)',

    // Adding the provided styles:
    backgroundImage: `linear-gradient(
        45deg,
        rgba(22, 22, 22, 0.96) 60%,
        transparent 80%
      ),
      url(${
        image
          ? image
          : 'https://free4kwallpapers.com/uploads/originals/2015/12/16/the-evil-within-2014-game-wallpaper.jpg'
      })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '4px',
  };

  const modalElementStyle: React.CSSProperties = {
    marginBottom: '0.5rem',
  };


  return <>MediaForm</>;
};
