import AppName from "./components/AppName";
import CreateTask from "./components/CreateTask";
import TodoItem from "./components/TodoItem";
import './App.css'
function App() {
  return (
    <div className="todo-container">
      <AppName/>
      <CreateTask/>
      <div className="items-container">
      <TodoItem/>
      <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          Learn React
        </div>
        <div className="col-4">
          06/01/2025
        </div>
        <div className="col-2">
          <button className="btn btn-danger todo-button" type="submit">Delete</button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
