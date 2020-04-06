import { GET_TYPE } from '../redux_types';

const INITIAL_STATE = {
  status: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TYPE:
      return { ...state, status: action.status };
    default: return state;
  }
};
