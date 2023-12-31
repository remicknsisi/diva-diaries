// Action Creators
export const addUser = (user) => {
  return {
    type: "users/add",
    payload: user,
  };
};

export const removeUser = (id) => {
  return {
    type: "users/remove",
    payload: id,
  };
};

export const updateUser = (user) => {
  return {
    type: "users/update",
    payload: user,
  };
};

// Reducers
const initialState = {
  entities: [],
  status: "idle"
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      return {
        ...state, 
        entities: [action.payload]};

    case "users/remove":
      return {
        ...state, 
        entities: state.entities.filter((user) => user.id !== action.payload)};

    case "users/update":
      return {
        ...state, 
        entities: state.entities.map((user) => user.id === action.payload.id ? action.payload : user)};

    case "users/usersLoading":
      return {
        ...state,
        status: "loading",
      };
    
    case "users/usersLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };

    default:
      return state;
  }
}

export function fetchUsers() {
  return function (dispatch) {
    dispatch({ type: "users/usersLoading" });
    fetch("/users")
      .then((response) => response.json())
      .then((users) =>
        dispatch({
          type: "users/usersLoaded",
          payload: users,
        })
      );
  };
}