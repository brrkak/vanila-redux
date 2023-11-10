import { combineReducers, legacy_createStore as createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createAction } from "redux-toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const persistConfig = {
  key: "todo",
  storage: storage,
};

const addToDo = (text) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// state 초기값을 "hello"
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
};

const allReducer = combineReducers({
  reducer,
});
const store = createStore(persistReducer(persistConfig, allReducer));
export default store;
