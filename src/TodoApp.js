import React, {useState} from 'react';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// materialUI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

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

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => id !== todo.id);
    setTodos(updatedTodos);
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
      <Grid container justify='center' style={{marginTop: '2rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;