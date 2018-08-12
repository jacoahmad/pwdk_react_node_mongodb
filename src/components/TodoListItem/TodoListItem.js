import React from 'react';
import './TodoListItem.css';

const TodoListItem = props => {
  console.log(props);
  return (
    <li className="itemList">
      {props.children}
      <div onClick={props.onDeleteList}>Del</div>
    </li>
  );
};

export default TodoListItem;