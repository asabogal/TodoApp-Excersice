import React from 'react';
// components
import Todo from './Todo';
// materialUI
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const TodoList = ({todos}) => {
  return (
    <Paper>
      <List>
      {todos.map(todo => (
        <>
          <Todo key={todo.id} task={todo.task} completed={todo.completed}/>
          <Divider/>
        </>
      ))}

      </List>
    </Paper>
  );
};

export default TodoList;