import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const ADD = "ADD";
const DELETE = "DELETE";

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
const persistConfig = {
  key: "todo", //localStorage에 저장될 key값
  storage: storageSession,
};
// state 초기값을 "hello"
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
};
