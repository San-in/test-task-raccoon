import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodos, Todo } from '../../redux/slices/todosSlice';
import TodoList from '../../components/MUI/todo-list';
import { Container } from '@mui/material';
import MainTitle from '../../components/MainTitle';
import CustomText from '../../components/CustomText';

const CompletedCases: React.FC = () => {
  const todos = useSelector(selectAllTodos);
  const [completedTodo, setCompletedTodo] = useState<Todo[] | []>([]);

  useEffect(() => {
    setCompletedTodo(todos.filter(({ isCompleted }) => isCompleted));
  }, [todos]);
  return (
    <Container maxWidth={'md'}>
      <div className={'content'}>
        <MainTitle>These tasks you have already done</MainTitle>

        {!!completedTodo.length ? (
          <TodoList todos={completedTodo} isCompletedPage={true} />
        ) : (
          <CustomText size={'large'}>You haven't done anything yet!</CustomText>
        )}
      </div>
    </Container>
  );
};

export default CompletedCases;
