/* eslint-disable no-console */
import {
  DATA_REQUESTED, DATA_LOADED, API_ERRORED,
} from './actions';

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  console.log('this is the reducers');
  console.log(state);
  console.log(action.type);
  console.log(action.payload);
  console.log('this is the reducers');

  switch (action.type) {
    case DATA_REQUESTED:
      return { ...state, error: null, loading: true };
    case DATA_LOADED:
      return { ...state, users: action.payload };
    case API_ERRORED:
      return {
        ...state, users: [], error: state.error, loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
