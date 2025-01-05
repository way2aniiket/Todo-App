function TodoItem() {
    let todoName = 'Buy Milk';
    let todoDate = '06/01/2025' ;
    return(
        <div className="container">
        <div className="row todo-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button className="btn btn-danger todo-button" type="submit">Delete</button>
        </div>
      </div>
    </div>
    )
}
export default TodoItem;