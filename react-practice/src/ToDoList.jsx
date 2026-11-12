import "./ToDoList.css"
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ToDOList() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const onTodoInputChange = (e) => {
    setTodo(e.target.value);
  };

  const onAddToClick = () => {
    setTodoList([...todoList, { id: uuid(), todo: todo,isChecked : false }]);
  };

const onDeleteClick = (id) => {
    const updatedTodoList = todoList.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
}

const onTodoChecked = (id) => {
    const updatedTodoList = todoList.map(item => (
        item.id===id?{...item,isChecked : !item.isChecked}:"item"
    ))
    setTodoList(updatedTodoList);
}
  return (
    <>
      <h1>My TODoList</h1>
      <div>
        <input
          type="text"
          onChange={onTodoInputChange}
          placeholder="Write your lists"
        />
        <button onClick={onAddToClick}>Add</button>
      </div>
      {todoList?.length > 0 &&
        todoList.map((item) => (
          <div key = {item.id}>
            <label>
            <input onClick = {() => onTodoChecked(item.id)}type="checkbox" />
            <span className = {item.isChecked?"mark" : ""}>{item.todo}</span>
            <button onClick = {() => onDeleteClick(item.id)}>delete</button>
            </label>
          </div>
        ))}
    </>
  );
}
export default ToDOList;
