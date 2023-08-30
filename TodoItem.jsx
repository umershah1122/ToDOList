import React from "react";

const TodoItem = (props) => {
  return (
    <div className="list">
      <span
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        X
      </span>
      <br />
      <li key={props.key}>{props.text}</li>
    </div>
  );
};

export default TodoItem;
