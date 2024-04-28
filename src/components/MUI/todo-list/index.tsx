import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteTodo, Todo, toggleTodo } from '../../../redux/slices/todosSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditTodoDialog from '../edit-todo-dialog';

interface TodoListProps {
  todos: Todo[];
  isCompletedPage?: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  isCompletedPage = false,
}) => {
  const [editedTodo, setEditedTodo] = useState<Todo | null>(null);
  const dispatch = useDispatch();

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(({ id, data, isCompleted }) => {
          return (
            <ListItem
              key={id}
              secondaryAction={
                <>
                  {!isCompletedPage && (
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => setEditedTodo({ id, data, isCompleted })}
                    >
                      <EditIcon color={'primary'} />
                    </IconButton>
                  )}
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteTodo(id))}
                  >
                    <DeleteForeverIcon color={'primary'} />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => dispatch(toggleTodo(id))}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isCompleted}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': id }}
                    disabled={isCompletedPage}
                  />
                </ListItemIcon>
                <ListItemText id={id} primary={data} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <EditTodoDialog
        editedTodo={editedTodo}
        onCancel={() => setEditedTodo(null)}
      />
    </>
  );
};

export default TodoList;
