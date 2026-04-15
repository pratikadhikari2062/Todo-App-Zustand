import "./App.css";
import Close from "./component/Close";
import Input from "./component/Input";
import List from "./component/List";
import Todo from "./component/Todo";

const App: React.FC = () => {
  return (
    <div >
      <Todo />
      <Input />
      <List />
      <Close/>
    </div>
  );
};
export default App;
