import React, { useEffect } from 'react';
import Button from '../Button';
import theme from '../../theme';
import H4 from '../H4';
import H6 from '../H6';
import { emptyMedia } from '../../types';

interface MediaDeleteFormProps {
  modalDeleteProps: {
    open: boolean;
  };
  mediaForm: {
    id?: number;
    image?: string;
    title: string;
    type: string;
    genre: string;
    releaseYear?: number | undefined;
    rating?: number | undefined;
  };
  handleDelete: any;
  setModalDeleteProps: (modalProps: { open: boolean }) => void;
  setMediaForm: (mediaForm: typeof emptyMedia) => void;
}

export const MediaDeleteForm: React.FC<MediaDeleteFormProps> = ({
  mediaForm,
  modalDeleteProps,
  handleDelete,
  setModalDeleteProps,
  setMediaForm,
}) => {
  const { open } = modalDeleteProps;
  const { id, title, image } = mediaForm;

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
          : 'https://wallbox.ru/resize/800x480/wallpapers/main/201419/3019ece58f6379e.jpg'
      })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${theme.palette.primary.danger}`,
    borderRadius: '4px',
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (open) {
        const modalElement = document.querySelector('.modal-container');

        if (modalElement && !modalElement.contains(e.target as Node)) {
          setModalDeleteProps({ open: false });
          setMediaForm(emptyMedia);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open, setMediaForm, setModalDeleteProps]);

  return (
    <>
      {open && (
        <div style={modalStyles} className="modal-container">
          <H6>Delete the following content?</H6>
          <H4>{title}</H4>
          <Button
            onClick={() => {
              handleDelete(id);
              setMediaForm(emptyMedia);
            }}
            style={{ margin: '0.5rem' }}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              setModalDeleteProps({ open: false });
              setMediaForm(emptyMedia);
            }}
            style={{ margin: '0.5rem' }}
          >
            Close
          </Button>
        </div>
      )}
    </>
  );
};
