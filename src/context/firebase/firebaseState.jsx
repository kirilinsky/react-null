import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { FirebaseReducer } from "./firebaseReducer";
import axios from "axios";
import { REMOVE_USER, ADD_USER, FETCH_USERS } from "../types";

export const FirebaseState = ({ children }) => {
  const db_url = process.env.REACT_APP_DB_URL;
  const initalState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(FirebaseReducer, initalState);

  const showLoader = () => dispatch({ type: "SHOW_LOADER" });

  const fetchUsers = async () => {
    showLoader();
    const res = await axios.get(`${db_url}/users.json`);
    let payload = [];
    if ( res.data === null) {
        payload = []
    } else {
      payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });
    }

    dispatch({
      type: FETCH_USERS,
      payload,
    });
  };

  const addUser = async (name) => {
    const user = {
      name,

      date: new Date().toJSON(),
    };

    try {
      const res = await axios.post(`${db_url}/users.json`, user);
      const payload = {
        ...user,
        id: res.data.name,
      };
      dispatch({ type: ADD_USER, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeUser = async (id) => {
    await axios.delete(`${db_url}/users/${id}.json`);
    dispatch({
      type: REMOVE_USER,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        removeUser,
        addUser,
        showLoader,
        fetchUsers,
        loading: state.loading,
        users: state.users,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
