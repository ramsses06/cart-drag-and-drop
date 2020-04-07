import { GET_PROFILE } from '../redux_types';
import User from '../services/User';

export const getProfile = () => async (dispatch, prevState) => {
  const user = await User.getProfile();
  console.log(user);
  dispatch({
    type: GET_PROFILE,
    data: user.data
  });
};
