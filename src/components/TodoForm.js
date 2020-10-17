import React from 'react';
import useFormInput from '../hooks/useFormInput';
// materialUI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const TodoForm = ({addTodo}) => {

  const [value, handleChange, reset] = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  }
  return (
    <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} label='Add New Todo' fullWidth/>
      </form>
    </Paper>
  );
};

export default TodoForm;