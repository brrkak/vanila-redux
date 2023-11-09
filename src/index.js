import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
// subscribe를 통해 데이터가 잘 들어갔는지 확인
// 잘 들어가면 {text: akdsfj, id: 651618998} 출력됨

// 추가한 ToDo들을 html에 구현한다.
const paintToDos = () => {
  const toDos = store.getState();

  ul.innerHTML = "";
  // 새로운 toDo를 생성했을때 전에 생성한것들과 같이 출력되는걸 방지

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo);
    // ToDo를 삭제하는 이벤트를 생성.
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};
store.subscribe(paintToDos);

// 객체
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
    // 내가 입력한 value값
    id: Date.now(),
  };
};

// 객체
const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// action으로 ADD_TODO를 보냄
const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
  // toDo를 text로 받아 action으로 addTodo를보냄
};

// action으로 DELETE_TODO를 보냄
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  // 각각의 버튼을 지정
  store.dispatch(deleteTodo(id));
  // action으로 객체를 보냄
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
  // 내가 입력한 value값을 dispatchAddTodo로 보냄.
};

form.addEventListener("submit", onSubmit);
