import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}
const TodoList = () => {
  //hardcode data tại component cha
  // const todos = [
  //   {
  //     id: 1,
  //     title: "Learn React TypeScript",
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Subscribe Youtube HoiDanIT",
  //     isComplete: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Learn English",
  //     isComplete: true,
  //   },
  // ];
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  const addNewTodo = (todo: ITodo) => {
    setListTodo([...listTodo, todo]);
  };
  const deleteTodo = (id: number) => {
    const newListTodo = listTodo.filter((todo) => todo.id !== id);
    setListTodo(newListTodo);
  };
  return (
    <div
      style={{
        width: "60vw",
        margin: "50px auto",
        border: " 1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        style={{
          padding: "10px 0",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          borderBottomStyle: "solid",
        }}
      >
        My todo list:
      </div>
      <br />
      <TodoInput
        // name="your todo"
        addNewTodo={addNewTodo}
      />
      <TodoData
        todos={listTodo}
        // owner={"hoidanit"} age={25} isDeveloper={true}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};
export default TodoList;
