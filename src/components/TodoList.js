import React from 'react';
// components
import Todo from './Todo';
// materialUI
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const TodoList = ({todos, deleteTodo, updateCompleted, editTodo}) => {
  return (
    <Paper>
      <List>
      {todos.map(todo => (
        <>
          <Todo
           key={todo.id} 
           id={todo.id} task={todo.task} 
           completed={todo.completed} 
           deleteTodo={deleteTodo}
           updateCompleted={updateCompleted}
           editTodo={editTodo}
           />
          <Divider/>
        </>
      ))}

      </List>
    </Paper>
  );
};

export default TodoList;