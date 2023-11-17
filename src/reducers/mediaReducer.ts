import { MediaActionType } from '../actions/action-types';
import { MediaType } from '../types';

interface State {
  data: MediaType[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  data: [],
  loading: false,
  error: '',
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case MediaActionType.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MediaActionType.CREATE_DATA_REQUEST:
    case MediaActionType.UPDATE_DATA_REQUEST:
    case MediaActionType.SEARCH_DATA_REQUEST:
    case MediaActionType.DELETE_DATA_REQUEST:
      return {
        ...state,
      };
    case MediaActionType.CREATE_DATA_SUCCESS:
      return {
        ...state,
        data: [action.payload, ...state.data],
        error: '',
      };
    case MediaActionType.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    // case MediaActionType.UPDATE_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     data: state.data.map((mediaItem) => {
    //       if (mediaItem.id === action.payload.id) {
    //         return action.payload;
    //       } else {
    //         return mediaItem;
    //       }
    //     }),
    //     error: '',
    //   };
    case MediaActionType.UPDATE_DATA_SUCCESS:
      const updatedItem = action.payload;
      const updatedIndex = state.data.findIndex(
        (mediaItem) => mediaItem.id === updatedItem.id
      );

      if (updatedIndex !== -1) {
        // Create a copy of the data array
        const newData = [...state.data];

        // Replace the item at the same index
        newData[updatedIndex] = updatedItem;

        return {
          ...state,
          data: newData,
          error: '',
        };
      }
      return state;
    // eslint-disable-next-line no-fallthrough
    case MediaActionType.SEARCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: '',
      };
    case MediaActionType.DELETE_DATA_SUCCESS:
      return {
        ...state,
        data: state.data.filter((mediaItem) => mediaItem.id !== action.payload),
        error: '',
      };
    case MediaActionType.CREATE_DATA_FAILURE:
    case MediaActionType.GET_DATA_FAILURE:
    case MediaActionType.UPDATE_DATA_FAILURE:
    case MediaActionType.SEARCH_DATA_FAILURE:
    case MediaActionType.DELETE_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
