import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import { deleteTodo } from "../slices/todoSlice";
import { toggleTodo } from "../slices/todoSlice";
import { useState } from "react";
import "../css/todoList.css";

export const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const onHandleTodo = (e) => {
    setText(e.target.value);
  };

  const onAddClick = () => {
    if (text.trim().length === 0) {
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        text: text,
        completed: false,
      }),
    );
    setText("");
  };

  const onDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>ToDo App</h1>
      <input
        value={text}
        placeholder="Enter your todo"
        onChange={onHandleTodo}
      />
      <button onClick={onAddClick}>Add</button>
      <h2>List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
          <button
            onClick={() => {
              onDeleteClick(todo.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
};
