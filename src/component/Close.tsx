import { useTodoStore } from "./Zustandinput";

const Close: React.FC = () => {
 const { todos, clearAll } = useTodoStore();
  return (
    <div>
      {" "}
      You have 4 pending task{" "}
      {todos.length > 0 && (
        <button
          onClick={clearAll}
        >
          Clear All
        </button>
      )}
    </div>
  );  
};
export default Close;
