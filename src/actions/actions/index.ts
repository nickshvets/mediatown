import { MediaActionType } from '../action-types';
import { MediaType } from '../../types';
import { Dispatch } from 'redux';
import { api } from '../../api';

// Create data action
export const createData = (media: MediaType): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: MediaActionType.CREATE_DATA_REQUEST });
    api
      .post('/media', media)
      .then((response: any) => {
        dispatch({
          type: MediaActionType.CREATE_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: MediaActionType.CREATE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getData = (type?: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: MediaActionType.GET_DATA_REQUEST });

    // Create the URL based on the type filter, if provided
    let url = '/media?_sort=dateCreated&_order=desc';
    if (type && type !== 'All') {
      url += `&type=${type}`;
    }

    api
      .get(url)
      .then((response: MediaType[]) => {
        dispatch({
          type: MediaActionType.GET_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: MediaActionType.GET_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Update data action
export const updateData = (id: number, data: MediaType): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: MediaActionType.UPDATE_DATA_REQUEST });
    api
      .put(`/media/${id}`, data)
      .then(() => {
        dispatch({
          type: MediaActionType.UPDATE_DATA_SUCCESS,
          payload: data,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: MediaActionType.UPDATE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Search data action
export const searchData = (query: string): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: MediaActionType.SEARCH_DATA_REQUEST });
    api
      .get(`/media?q=${query}`)
      .then((response: MediaType[]) => {
        dispatch({
          type: MediaActionType.SEARCH_DATA_SUCCESS,
          payload: response,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: MediaActionType.SEARCH_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Delete data action
export const deleteData = (id: number): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: MediaActionType.DELETE_DATA_REQUEST });
    api
      .delete(`/media/${id}`)
      .then(() => {
        dispatch({
          type: MediaActionType.DELETE_DATA_SUCCESS,
          payload: id,
        });
      })
      .catch((error: Error) => {
        dispatch({
          type: MediaActionType.DELETE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};
