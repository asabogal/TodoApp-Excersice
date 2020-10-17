import React from 'react';
// materialUI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Todo = ({id, task, completed, deleteTodo}) => {
  return (
    <ListItem>
      <Checkbox checked={completed}/>
      <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete'>
          <DeleteIcon onClick={() => deleteTodo(id)}/>
        </IconButton>
        <IconButton aria-label='Edit'>
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
  </ListItem>

  );
};

export default Todo;