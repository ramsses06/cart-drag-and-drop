// import axios from 'axios';
import { GET_TYPE } from '../redux_types';

export const getType = () => async (dispatch, prevState) => {
  console.log('prevState', prevState());
  // const responseData = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch({
    type: GET_TYPE,
    status: !prevState().reduxReducer.status
  });
};
