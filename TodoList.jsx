import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const InputEvent = (event) => {
    setItem(event.target.value);
  };
  const addItem = () => {
    setListItem((oldItem) => {
      return [...oldItem, item];
    });
    setItem("");
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setListItem((oldItem) => {
      return oldItem.filter((arryElmt, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" placeholder="Add an item" onChange={InputEvent} />
        <button onClick={addItem}>+</button>
        <ol>
          {listItem.map((e, i) => {
            return <TodoItem text={e} key={i} id={i} onSelect={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
