import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';

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

  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = (newTodo) => {
    setTodos([...todos, {id: uuid(), task: newTodo, completed: false}])
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => id !== todo.id);
    setTodos(updatedTodos);
  }

  const updateCompleted = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodos); 
  }   

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? {...todo, task: newTask} : todo
    );
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
          <TodoList todos={todos} deleteTodo={deleteTodo} updateCompleted={updateCompleted} editTodo={editTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;