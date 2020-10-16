import React from 'react';
import useFormInput from '../hooks/useFormInput';
// materialUI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const TodoForm = () => {

  const [value, handleChange, reset] = useFormInput('');
  return (
    <Paper>
      <TextField value={value} onChange={handleChange}/>
    </Paper>
  );
};

export default TodoForm;