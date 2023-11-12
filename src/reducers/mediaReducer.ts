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
    default:
      return state;
  }
};

export default reducer;
