import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let delTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
          
        };
      })
    );
  };
  let markOneDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br /> <br />
      <hr />
      <h2>Tasks To Do</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            &nbsp; &nbsp;
            {/* <button onClick={() => delTodo(todo.id)}>delete</button> */}
            {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button> */}
            <button onClick={() => markOneDone(todo.id)}>
              Mark It As Done
            </button>
          </li>
        ))}
      </ul>
      <br /> <br />
      {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
      <button onClick={markAllDone}>Mark All Done</button>
    </div>
  );
}
