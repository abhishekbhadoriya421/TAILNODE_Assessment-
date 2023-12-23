import style from "./style.module.css";
export default function CompleteTodoItemComponent({ status, Todo, time, id ,handleUpdateStatus}) {
    const Time = new Date(time);
// Here getting the date month and year separately 
  const date = Time.getDate();
  const month = Time.getMonth();
  const year = Time.getFullYear();
  return (
    <>
      <div className={style.Item}>
        <p className={style.Todo}>{Todo}</p>
        <hr />
        <p className={style.date}>
          {date}/{month}/{year}
        </p>
        {/* Button Style will be changed according to the status And that will create Difference between completed and node completed todo */}
        <button
          className={
            status === "Pending"
              ? style.statusPendingBtn
              : style.statusCompletedBtn
          }
          
        // this function should only work when status is pending  
          onClick={()=> status === 'Pending'? handleUpdateStatus(id): null}
        >
          {status}
        </button>
      </div>
    </>
  );
}
