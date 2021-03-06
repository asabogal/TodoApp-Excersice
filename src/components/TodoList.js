import React from 'react';
// components
import Todo from './Todo';
// materialUI
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const TodoList = ({todos, deleteTodo, updateCompleted, editTodo}) => {

  if (todos.length)
  return (
    <Paper>
      <List>
      {todos.map((todo, i) => (
        <>
          <Todo
           key={todo.id} 
           id={todo.id} task={todo.task} 
           completed={todo.completed} 
           deleteTodo={deleteTodo}
           updateCompleted={updateCompleted}
           editTodo={editTodo}
           />
          {i < todos.length - 1 && <Divider/>}
        </>
      ))}
      </List>
    </Paper>
  );
  return null;
};

export default TodoList;