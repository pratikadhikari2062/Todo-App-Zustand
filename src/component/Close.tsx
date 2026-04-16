import { useTodoStore } from "./Zustandinput";

const Close: React.FC = () => {
  const { todos, clearAll } = useTodoStore();
  return (
    <div>
      {" "}
      You have {todos.length} {todos.length > 1 ? "todos" : "todo"}{" "}
      {todos.length > 0 && <button onClick={clearAll}>Clear All</button>}
    </div>
  );
};
export default Close;
