import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import {
  getData,
  updateData,
  deleteData,
  createData,
  searchData,
} from './actions/actions';
import { RootState } from './reducers';
import { MediaType, emptyMedia } from './types';
import Media from './MediaItem';
import {
  MediaListContainer,
  MediaListControls,
  LoadingStatus,
  LoadingError,
  Input,
  Button,
  H4,
  Container,
} from './components';

import { store } from './store/store';
import GlobalStyle from './GlobalStyle';
import { MediaForm } from './components/media/MediaForm';
import { MediaDeleteForm } from './components/media/MediaDeleteForm';
import Select from './components/Select';

import 'react-toastify/dist/ReactToastify.css';
import theme from './theme';

const App = () => {
  const showToast = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      theme: 'dark',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      progressStyle: { background: theme.palette.secondary.main },
      style: { border: `1px solid ${theme.palette.secondary.main}` },
    });
  };
  const { data, loading, error } = useSelector(
    (state: RootState) => state.media
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(getData());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');
  const [modalProps, setModalProps] = useState({ open: false } as {
    open: boolean;
    create?: boolean;
  });
  const [modalDeleteProps, setModalDeleteProps] = useState({ open: false } as {
    open: boolean;
  });
  const [mediaForm, setMediaForm] = useState(emptyMedia);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchData(searchTerm));
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onDelete = (id: number) => {
    dispatch(deleteData(id));
    setModalDeleteProps({ open: false });
    showToast('Successfully deleted');
  };

  const [errors, setErrors] = useState({
    title: false,
    type: false,
    genre: false,
    releaseYear: false,
    rating: false,
    image: false,
  });

  const validateForm = () => {
    const newErrors = {
      title: !mediaForm.title,
      type: !mediaForm.type,
      genre: !mediaForm.genre,
      releaseYear:
        mediaForm.releaseYear === undefined || mediaForm.releaseYear <= 0,
      rating: mediaForm.rating === undefined || mediaForm.rating <= 0,
      image: !mediaForm.image,
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((field) => !field); // Return true if all fields are valid
  };

  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue: string | number | undefined = value;

    if ((name === 'releaseYear' || name === 'rating') && value.trim() === '') {
      newValue = undefined;
    } else if (name === 'releaseYear' || name === 'rating') {
      newValue = parseInt(value, 10);
    }

    setMediaForm((prev) => ({ ...prev, [name]: newValue }));

    // Use type assertion
    const errorKey = name as keyof typeof errors;
    if (errors[errorKey]) {
      setErrors({ ...errors, [errorKey]: false });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMediaForm((prev) => ({ ...prev, [name]: value }));

    // Use type assertion
    const errorKey = name as keyof typeof errors;
    if (errors[errorKey]) {
      setErrors({ ...errors, [errorKey]: false });
    }
  };

  const handleSubmit = (create: boolean) => {
    if (validateForm()) {
      if (create) {
        dispatch(createData(mediaForm));
        setModalProps({ open: false });
        setMediaForm(emptyMedia);
        showToast('Successfully created');
      } else {
        const { id } = mediaForm;
        if (id !== undefined) {
          dispatch(updateData(id, mediaForm));
          setModalProps({ open: false });
          setMediaForm(emptyMedia);
          showToast('Successfully updated');
        }
      }
    }
  };

  const loadFunction = () => {
    if (loading) {
      return <LoadingStatus>Loading media ...</LoadingStatus>;
    } else if (Array.isArray(data) && data.length === 0) {
      return <LoadingStatus>No media found.</LoadingStatus>;
    } else if (Array.isArray(data) && data.length > 0) {
      return (
        <MediaListContainer>
          {data.map((mediaItem: MediaType) => (
            <Media
              key={mediaItem.id}
              mediaItem={mediaItem}
              onDelete={onDelete}
              setModalProps={setModalProps}
              setMediaForm={setMediaForm}
              setModalDeleteProps={setModalDeleteProps}
            />
          ))}

          <MediaForm
            errors={errors}
            modalProps={modalProps}
            mediaForm={mediaForm}
            handleModalInputChange={handleModalInputChange}
            handleSelectChange={handleSelectChange}
            handleSubmit={handleSubmit}
            setModalProps={setModalProps}
            setMediaForm={setMediaForm}
            setErrors={setErrors}
          />

          <MediaDeleteForm
            modalDeleteProps={modalDeleteProps}
            setModalDeleteProps={setModalDeleteProps}
            setMediaForm={setMediaForm}
            mediaForm={mediaForm}
            handleDelete={onDelete}
          />
        </MediaListContainer>
      );
    } else if (error) {
      return (
        <LoadingError>
          <LoadingStatus>Something went wrong.</LoadingStatus>
          {/* @ts-ignore */}
          <Button onClick={() => dispatch(getData())}>Retry</Button>
        </LoadingError>
      );
    }
  };

  const [selectedType, setSelectedType] = useState('All');
  useEffect(() => {
    //@ts-ignore
    dispatch(getData(selectedType)); // Pass selectedType as a filter to getData
  }, [dispatch, selectedType]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <Container>
      <H4>MEDIA TOWN</H4>
      <MediaListControls>
        <div style={{ display: 'flex' }}>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search Media..."
          />
          <Select
            style={{ marginLeft: '0.2rem' }}
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="All">All</option>
            <option value="Movie">Movie</option>
            <option value="TV Show">TV Show</option>
            <option value="Game">Game</option>
          </Select>
        </div>
        <Button
          onClick={() => {
            setModalProps({ open: true, create: true });
          }}
        >
          Create Media
        </Button>
      </MediaListControls>
      {loadFunction()}
      <ToastContainer />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
