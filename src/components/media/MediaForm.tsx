import React, { useEffect, ChangeEvent } from 'react';
import Input from '../Input';
import Button from '../Button';
import H4 from '../H4';
import { emptyMedia, emptyErrors } from '../../types';
import Select from '../Select';
import theme from '../../theme';

interface MediaFormProps {
  modalProps: {
    open: boolean;
    create?: boolean;
  };
  errors: any;
  mediaForm: {
    image?: string;
    title: string;
    type: string;
    genre: string;
    releaseYear?: number | undefined;
    rating?: number | undefined;
  };
  handleModalInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (create: boolean) => void;
  setModalProps: (modalProps: { open: boolean; create?: boolean }) => void;
  setMediaForm: (mediaForm: typeof emptyMedia) => void;
  setErrors: (mediaForm: typeof emptyErrors) => void;
}

export const MediaForm: React.FC<MediaFormProps> = ({
  modalProps,
  errors,
  mediaForm,
  handleModalInputChange,
  handleSelectChange,
  handleSubmit,
  setModalProps,
  setMediaForm,
  setErrors,
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
          : 'https://wallbox.ru/resize/800x480/wallpapers/main/201419/3019ece58f6379e.jpg'
      })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '4px',
  };

  const inputStyle = (fieldName: string): React.CSSProperties => ({
    marginBottom: '0.5rem',
    border: errors[fieldName] ? '1px solid red' : '',
    borderRadius: '5px',
  });

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (open) {
        const modalElement = document.querySelector('.modal-container');

        if (modalElement && !modalElement.contains(e.target as Node)) {
          setModalProps({ open: false });
          setMediaForm(emptyMedia);
          setErrors(emptyErrors);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open, setModalProps, setMediaForm, setErrors]);

  return (
    <>
      {open && (
        <div style={modalStyles} className="modal-container">
          <H4>{create ? 'Create' : 'Edit'} Media</H4>
          {errors.title && (
            <span style={{ color: 'red' }}>Title is required.</span>
          )}
          <Input
            type="text"
            name="title"
            value={mediaForm.title || ''}
            onChange={handleModalInputChange}
            placeholder="Title"
            style={inputStyle('title')}
          />

          {errors.type && (
            <span style={{ color: 'red' }}>Type is required.</span>
          )}
          <Select
            value={mediaForm.type || ''}
            onChange={handleSelectChange}
            name="type"
            style={inputStyle('type')}
          >
            <option value="">Select Type</option>
            <option value="Movie">Movie</option>
            <option value="TV Show">TV Show</option>
            <option value="Game">Game</option>
          </Select>

          {errors.genre && (
            <span style={{ color: 'red' }}>Genre is required.</span>
          )}
          <Input
            type="text"
            name="genre"
            value={mediaForm.genre || ''}
            onChange={handleModalInputChange}
            placeholder="Genre"
            style={inputStyle('genre')}
          />

          {errors.releaseYear && (
            <span style={{ color: 'red' }}>Release year is required.</span>
          )}
          <Input
            type="number"
            name="releaseYear"
            value={mediaForm.releaseYear || ''}
            onChange={handleModalInputChange}
            placeholder="Release Year"
            style={inputStyle('releaseYear')}
          />

          {errors.rating && (
            <span style={{ color: 'red' }}>Rating is required.</span>
          )}
          <Input
            type="number"
            name="rating"
            value={mediaForm.rating || ''}
            onChange={handleModalInputChange}
            placeholder="Rating"
            style={inputStyle('rating')}
          />

          {errors.image && (
            <span style={{ color: 'red' }}>Image link is required.</span>
          )}
          <Input
            type="text"
            name="image"
            value={mediaForm.image || ''}
            onChange={handleModalInputChange}
            placeholder="Image link"
            style={inputStyle('image')}
          />

          <Button
            onClick={() => handleSubmit(create)}
            style={{ margin: '0.5rem' }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              setModalProps({ open: false });
              setMediaForm(emptyMedia);
              setErrors(emptyErrors);
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
