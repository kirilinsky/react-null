import { SHOW_LOADER, ADD_USER, REMOVE_USER, FETCH_USERS } from "../types";

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_USER]: (state, { payload }) => ({
    ...state,
    users: [...state.users,  payload],
  }),
  [FETCH_USERS]: (state, { payload }) => ({ ...state, users: payload,loading:false  }),
  [REMOVE_USER]: (state, { payload }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload),
  }),
  DEFAULT: function (state) {
    return state;
  },
};

export const FirebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
