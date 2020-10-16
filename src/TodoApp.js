import React from 'react';

// materialUI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const TodoApp = () => {
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
      postion='static'
      >
        <Toolbar>
          <Typography color='inherit'>TODO APP</Typography>
        </Toolbar>
      </AppBar> 
    </Paper>
  );
};

export default TodoApp;