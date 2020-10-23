import React from 'react';
import useFormInput from '../hooks/useFormInput';

// materialUI
import TextField from '@material-ui/core/TextField';

const EditTodoForm = () => {

  const [value, handleChange, reset] = useFormInput('');
  return (
    <TextField 
      margin='normal' 
      value={value} 
      onChange={handleChange} 
      fullWidth/>
  );
};

export default EditTodoForm;