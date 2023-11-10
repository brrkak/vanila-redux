import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

//  useDispatch를 이용하여 deleteToDo기능 만들기
const ToDo = ({ text, id }) => {
  //  props에 store.js에 있는 deleteToDo의 id를 정의
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(actionCreators.deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
};

export default ToDo;
