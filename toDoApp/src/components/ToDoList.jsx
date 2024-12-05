import React from "react";

const style = {
  li: ``,
  row: ``,
  text:``
};

const ToDoList = ({todo}) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" name="" id="" />
        <p className={style.text}>{todo}</p>
      </div>
    </li>
  );
};

export default ToDoList;
