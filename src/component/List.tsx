import { useTodoStore } from "./Zustandinput";

const List: React.FC = () => {
  const { todos, deleteTodo } = useTodoStore();

  return (
    <>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} >
              <span>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No todos added yet.</p>
        )}
      </ul>
    </>
  );
};

export default List;
