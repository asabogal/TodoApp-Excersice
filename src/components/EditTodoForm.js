import React from 'react';
import useFormInput from '../hooks/useFormInput';

// materialUI
import TextField from '@material-ui/core/TextField';

const EditTodoForm = ({id, task, editTodo, toggleEditing}) => {

  const [value, handleChange, reset] = useFormInput(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditing(false);
  }

  return (
    <form onSubmit={handleSubmit}
      style={{
      width: '73%',
      margin: '1rem'
    }}
    >
      <TextField 
        margin='normal' 
        value={value} 
        onChange={handleChange} 
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;