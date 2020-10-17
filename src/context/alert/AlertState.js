import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  // initial states
  const initialState = null;

  //dispatch a type back to reducer (type and payload)
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  // SET_ALERT
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: null });
    }, 5000);
  };

  // value -> anything available in the entire app
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
