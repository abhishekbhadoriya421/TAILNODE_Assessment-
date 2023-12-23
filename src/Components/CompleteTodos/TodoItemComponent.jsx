import style from "./style.module.css";
export default function CompleteTodoItemComponent({ status, Todo, time }) {
// Here getting the date month and year separately 
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <div className={style.Item}>
        <p className={style.Todo}>workOut</p>
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
        >
          {status}
        </button>
      </div>
    </>
  );
}
