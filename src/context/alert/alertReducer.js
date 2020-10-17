import { SET_ALERT, REMOVE_ALERT } from '../types';

// state is immutable, so we need to make a copy of it, instead of changing it
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        state: action.payload
      };
    case REMOVE_ALERT:
      return {
        state: null
      };
    default:
      return state;
  }
};
