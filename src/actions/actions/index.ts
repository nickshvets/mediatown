import { MediaActionType } from '../action-types';
import { MediaType } from '../../types';
import { Dispatch } from 'redux';
import { api } from '../../api';

// Create data action
export const createData = (media: MediaType): any => {
  return (dispatch: Dispatch) => {
  
  };
};

export const getData = (type?: string) => {
  return (dispatch: Dispatch) => {
  
  };
};

// Update data action
export const updateData = (id: number, data: MediaType): any => {
  return (dispatch: Dispatch) => {
   
  };
};

// Search data action
export const searchData = (query: string): any => {
  return (dispatch: Dispatch) => {
  
  };
};

// Delete data action
export const deleteData = (id: number): any => {
  return (dispatch: Dispatch) => {
  
  };
};
