import React, {useState} from 'react';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// materialUI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const TodoApp = () => {

  const initialTodos = [
    {id: 1, task: 'Finish App', completed: false},
    {id: 2, task: 'Upload App', completed: false},
    {id: 3, task: 'Uopdate Portfolio', completed: false}
  ]

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, {id: 4, task: newTodo, completed: false}])
  }

  return (
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar 
        style={{height: '64px'}}
        color='primary' 
        position='static'
      >
        <Toolbar>
          <Typography color='inherit'>TODO APP</Typography>
        </Toolbar>
      </AppBar> 
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </Paper>
  );
};

export default TodoApp;