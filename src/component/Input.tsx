import { useState } from "react";
import { useTodoStore } from "./Zustandinput";

const Input: React.FC = () => {
  const [input, setinput] = useState<string>("");
  const { addTodo } = useTodoStore();

  const handleAdd = () => {
    if (!input.trim) return;
    addTodo(input);
    setinput("");
  };
  return (
    <div style={{ margin: 6 }}>
      <input
        type="text"
        placeholder="Add Your New Todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />{" "}
      <button onClick={handleAdd}>PlusIcon </button>
    </div>
  );
};
export default Input;
