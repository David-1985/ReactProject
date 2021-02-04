import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "buy 1" },
    { id: 1, completed: false, title: "buy 2" },
    { id: 1, completed: false, title: "buy 3" },
  ];
  return (
    <div class="wrapper">
      <h1>React</h1>
      <TodoList aaa = {todos} />
    </div>
  );
}

export default App;
