import { MediaActionType } from '../action-types';
import { MediaType } from '../../types';

// Create data action creators
export const createDataRequest = () => ({
  type: MediaActionType.CREATE_DATA_REQUEST,
});

export const createDataSuccess = (data: MediaType) => ({
  type: MediaActionType.CREATE_DATA_SUCCESS,
  payload: data,
});

export const createDataFailure = (error: string) => ({
  type: MediaActionType.CREATE_DATA_FAILURE,
  payload: error,
});

// Read data action creators
export const getDataRequest = () => ({
  type: MediaActionType.GET_DATA_REQUEST,
});

export const getDataSuccess = (data: MediaType) => ({
  type: MediaActionType.GET_DATA_SUCCESS,
  payload: data,
});

export const getDataFailure = (error: string) => ({
  type: MediaActionType.GET_DATA_FAILURE,
  payload: error,
});

// Update data action creators
export const updateDataRequest = () => ({
  type: MediaActionType.UPDATE_DATA_REQUEST,
});

export const updateDataSuccess = (data: MediaType) => ({
  type: MediaActionType.UPDATE_DATA_SUCCESS,
  payload: data,
});

export const updateDataFailure = (error: string) => ({
  type: MediaActionType.UPDATE_DATA_FAILURE,
  payload: error,
});

// Delete data action creators
export const deleteDataRequest = () => ({
  type: MediaActionType.DELETE_DATA_REQUEST,
});

export const deleteDataSuccess = (id: number) => ({
  type: MediaActionType.DELETE_DATA_SUCCESS,
  payload: id,
});

export const deleteDataFailure = (error: string) => ({
  type: MediaActionType.DELETE_DATA_FAILURE,
  payload: error,
});
