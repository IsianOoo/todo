import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text:` ml-2 cursor-pointer`,
  textComplete:` ml-2 cursor-pointer line-through`,
  button:`cursor-pointer flex items-center`
};

const ToDoList = ({todo}) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" name="" id="" />
        <p className={style.text}>{todo}</p>
      </div>
      <button><FaTrashAlt /></button>
    </li>
  );
};

export default ToDoList;
