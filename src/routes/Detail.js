import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const myId = useParams().id;
  const toDo = toDos.reducer.find((toDo) => toDo.id === parseInt(myId));

  return (
    <div>
      {toDo?.text}
      Created at: {toDo?.id}
    </div>
  );
};

const mapStateProps = (state) => {
  return { toDos: state };
};

export default connect(mapStateProps)(Detail);
