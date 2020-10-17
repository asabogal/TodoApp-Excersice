import React from 'react';
// materialUI
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({task, completed}) => {
  return (
    <ListItem>
      <Checkbox checked={completed}/>
      <ListItemText>{task}</ListItemText>
  </ListItem>

  );
};

export default Todo;