import { useState } from "react";
import style from "./style.module.css";
// Add New Todo Form
export default function AddTodoFormComponent({handleAddTodo}) {
  const [todoValue, setTodoValue] = useState(null); // Contain New Todo Text
  const [showForm, setShowForm] = useState(false); // Manage Form Should be seen or not

  // Handle on Submit

  function handleOnSubmit(e){
    e.preventDefault();
    if(todoValue!==null){
      handleAddTodo(todoValue);
      setTodoValue(null);
    }else{
      alert("Cannot Add Empty Todo")
    }
  }
  return (
    <>
    <div className={(showForm) ? style.formContainer : null}>
        <h2 className={style.heading} style={(showForm)?null:{margin:'50px 0px 20px 0px'}}>Add New Todo</h2>
      {
        // Show Add Todo Form If ShowForm Is Set To True Else Show Button
        showForm ? (
          <div >
            <p className={style.closeForm}
             title="Close Form"
             onClick={(e)=>setShowForm(!showForm)}
             >X</p>
            <form className={style.form} onSubmit={handleOnSubmit}>
              <div>
                <input
                  type="text"
                  name="Todo"
                  value={todoValue}
                  onChange={(e) => setTodoValue(e.target.value)}
                  className={style.inputTodo}
                  placeholder="Enter Todo"
                />
              </div>
              <div>
                <button type="submit" className={style.addTodoBtn}>
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setShowForm(!showForm)}
            className={style.showTodoFormBtn}
          >
            Add New Todo
          </button>
        )
      }
    </div>
    </>
  );
}
