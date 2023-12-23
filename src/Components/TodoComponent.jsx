import AddTodoFormComponent from "./AddTodoForm/AddTodoFormComponent";
import TodoItemComponent from "./CompleteTodos/TodoItemComponent";
import style from "./style.module.css";
// Main Function

function TodoComponent() {
  return (
    <>
      <h1 className={style.heading}>Todo Application</h1>
      {/* this contain Add new todo Form For Adding Todo in List */}
      <div>
        <AddTodoFormComponent />
      </div>

      {/* Here we are using same component to show Completed todo and newly created todo,  */}
      {/* Here if status is Pending then its mean that Its new Todo but is status is completed that mean todo will come inside the completed List*/}

      <h1 className={style.heading} style={{ marginTop: "30px" }}>
        New Todo List
      </h1>
      <div className={style.CompleteTodoList}>
        <TodoItemComponent status={"Pending"} />
      </div>


      <h1 className={style.heading} style={{ marginTop: "30px" }}>
        Completed Todo List
      </h1>
      <div className={style.CompleteTodoList}>
        <TodoItemComponent status={"Completed"} />
      </div>
    </>
  );
}

export default TodoComponent;
