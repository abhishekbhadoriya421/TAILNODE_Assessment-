import { useEffect, useState } from "react";
import AddTodoFormComponent from "./AddTodoForm/AddTodoFormComponent";
import TodoItemComponent from "./CompleteTodos/TodoItemComponent";
import style from "./style.module.css";
import { v4 as uuidv4 } from "uuid";
// Main Function

function TodoComponent() {
  const [todos, setTodos] = useState(null);

  // Loading Todo's from Local Storage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Handling Add todo
  // Using local Store to store todo
  function handleAddTodo(todoValue) {
    if (todos !== null) {
      setTodos([
        {
          id: uuidv4(),
          todo: todoValue,
          time: Date.now(),
          status: "Pending",
        },
        ...todos,
      ]);
    } else {
      setTodos([
        {
          id: uuidv4(),
          todo: todoValue,
          time: Date.now(),
          status: "Pending",
        },
      ]);
    }
  }

  // Whenever the todo get added it should also be updated
  useEffect(() => {
    // The value should only be set when its not null
    if (todos !== null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);


  // Update Todo
  function updateTodo(id){
    const  newtodos = todos.filter(todo=>{
        if(todo.id === id){
          todo.status = 'Completed'
        }
        return  todo
      }) 

      setTodos(newtodos);
  }

  return (
    <>
      <h1 className={style.heading}>Todo Application</h1>
      {/* this contain Add new todo Form For Adding Todo in List */}
      <div>
        <AddTodoFormComponent handleAddTodo={handleAddTodo} />
      </div>

      {/* Here we are using same component to show Completed todo and newly created todo,  */}
      {/* Here if status is Pending then its mean that Its new Todo but is status is completed that mean todo will come inside the completed List*/}

      <h1 className={style.heading} style={{ marginTop: "30px" }}>
        New Todo List
      </h1>
      <div className={style.CompleteTodoList}>
        {/* Iterating Over the Todo array and checking if its status pending only then print id else not Same for completed section */}
        {todos &&
          todos.map((todo, ind) => {
            // return <></> ;
            return (
              <>
                {todo.status === "Pending" ? (
                  <TodoItemComponent
                    key={ind} // Use a unique identifier as the key
                    status={"Pending"}
                    Todo={todo.todo}
                    time={todo.time}
                    id = {todo.id}
                    handleUpdateStatus={updateTodo}
                  />
                ) : (
                  false
                )}
              </>
            );
          })}
      </div>

      {/* Complete Section */}
      <h1 className={style.heading} style={{ marginTop: "30px" }}>
        Completed Todo List
      </h1>
      <div className={style.CompleteTodoList}>
        {todos &&
          todos.map((todo, ind) => {
            // return <></> ;
            return (
              <>
                {todo.status === "Completed" ? (
                  <TodoItemComponent
                    key={ind} // Use a unique identifier as the key
                    status={"Completed"}
                    Todo={todo.todo}
                    time={todo.time}
                  />
                ) : (
                  false
                )}
              </>
            );
          })}
      </div>
    </>
  );
}

export default TodoComponent;
