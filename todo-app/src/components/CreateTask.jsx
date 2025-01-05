function CreateTask() {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          <input type="text" placeholder="Enter task here" />
        </div>
        <div className="col-4">
          <input type="date" name="date" id="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-button" type="submit">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateTask;
