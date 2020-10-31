import React from 'react';
import useFormInput from '../hooks/useFormInput';

// materialUI
import TextField from '@material-ui/core/TextField';

const EditTodoForm = ({id, editTodo, toggleEditing}) => {

  const [value, handleChange, reset] = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditing(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        margin='normal' 
        value={value} 
        onChange={handleChange} 
        fullWidth
      />
    </form>
  );
};

export default EditTodoForm;