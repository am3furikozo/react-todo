import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './Todo.css';

const slyles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={slyles.ul}>
      {props.todos.map((todo, idx) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={idx}
            onChangeCallback={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  onToggle: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
