import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';

const AddTodoDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD TODO
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'md'}
        fullWidth={true}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const todo = {
              id: uuidv4(),
              data: formJson.todo,
              isCompleted: false,
            };
            dispatch(addTodo(todo));
            handleClose();
          },
        }}
      >
        <DialogTitle>Add a new todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="todo"
            name="todo"
            label="Please enter your new Todo"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AddTodoDialog;
