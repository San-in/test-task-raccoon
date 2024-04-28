import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import { editTodo, Todo } from '../../../redux/slices/todosSlice';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

interface EditTodoDialogProps {
  editedTodo: Todo | null;
  onCancel: () => void;
}
const EditTodoDialog: React.FC<EditTodoDialogProps> = ({
  editedTodo,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [isEditedBtnDisabled, setIsEditedBtnDisabled] = useState<boolean>(true);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditedBtnDisabled(e.target.value === editedTodo?.data);
  };
  return (
    <Dialog
      open={!!editedTodo}
      onClose={onCancel}
      maxWidth={'md'}
      fullWidth={true}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          if (editedTodo) {
            const { id, isCompleted } = editedTodo;
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());

            dispatch(
              editTodo({
                id,
                data: formJson.editedTodo,
                isCompleted,
              })
            );
            onCancel();
          }
        },
      }}
    >
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="editedTodo"
          name="editedTodo"
          label="Edit your todo"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={editedTodo?.data}
          onChange={handleOnChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={isEditedBtnDisabled}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoDialog;
