import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../slice/toDosSlice";
import ToDo from "../components/ToDo";
// store.js에 export한 actionCreators를 import시킴

// props를 toDos라고 지정
const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addToDo(text);
    // props의 addToDo를 action
    setText("");
  };
  console.log(toDos.toDos);
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
      {/* store에 가져온 toDos를 시각화 */}
    </div>
  );
};

// store.js에서 가져온 state=["hello"]를 리턴하여 toDos props에 보냄
const mapStateToProps = (state) => {
  return { toDos: state };
};

// addToDo를 dispatch해서 action으로 보냄
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
