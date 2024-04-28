import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos } from '../../redux/slices/todosSlice';
import AddTodoDialog from '../../components/MUI/add-todo-dialog';
import TodoList from '../../components/MUI/todo-list';
import { Container } from '@mui/material';
import MainTitle from '../../components/MainTitle';
import CustomText from '../../components/CustomText';

const AllCases: React.FC = () => {
  const todos = useSelector(selectAllTodos);

  return (
    <Container maxWidth={'md'}>
      <div className={'content'}>
        <MainTitle>What would you like to do today?</MainTitle>
        <AddTodoDialog />
        {!!todos.length ? (
          <TodoList todos={todos} />
        ) : (
          <CustomText size={'large'}>You have nothing to do yet!</CustomText>
        )}
      </div>
    </Container>
  );
};

export default AllCases;
