import React, { useReducer } from "react";
import {AlertContext} from "./alertContext";
import {AlertReducer} from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, { visible: false });

  const show = (duration,text, type = "warning") => {
    dispatch({
      type: SHOW_ALERT,
      payload: {duration, text, type },
    });
  };
  const hide = () => {
    dispatch({ type: HIDE_ALERT });
  }; 

  return (
    <AlertContext.Provider value={{ show, hide, alert:state }}>
      {children}
    </AlertContext.Provider>
  );
};
