import { GET_PROFILE } from '../redux_types';

const INITIAL_STATE = {
  profile: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, profile: action.data };
    default: return state;
  }
};
