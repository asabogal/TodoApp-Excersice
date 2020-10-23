import React from 'react';
import useToggleState from '../hooks/useToggleState';
// components
import EditTodoForm from './EditTodoForm';
// materialUI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Todo = ({id, task, completed, deleteTodo, updateCompleted}) => {

  const [editing, toggleEditing] = useToggleState(false);
 
  return (
    <ListItem>
    {editing ? <EditTodoForm/>: 
    <>
      <Checkbox checked={completed} onClick={() => updateCompleted(id)}/>
      <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete' onClick={() => deleteTodo(id)}>
          <DeleteIcon/>
        </IconButton>
        <IconButton aria-label='Edit' onClick={toggleEditing}>
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </>
    }
  </ListItem>

  );
};

export default Todo;