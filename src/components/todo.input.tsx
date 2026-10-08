import { useState } from "react";
interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}
interface Iprops {
  name?: string;
  addNewTodo: (value: ITodo) => void;
}
const TodoInput = (props: Iprops) => {
  const { addNewTodo } = props;
  const [todo, setTodo] = useState<string>("");
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClick = () => {
    if (!todo) {
      alert("empty todo");
      return;
    }
    addNewTodo({
      id: randomNumber(1, 100000000),
      title: todo,
      isComplete: true,
    });
    setTodo("");
  };
  return (
    <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <input type="text" value={todo} onChange={handleTextChange} />
      <button onClick={handleClick}>Add todo</button>
    </div>
  );
};

export default TodoInput;
