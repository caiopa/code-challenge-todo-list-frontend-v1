import React, { useCallback, useEffect, useState } from 'react';
import { TodoProps } from '@types';
import * as S from 'style';
import { TodosContainer } from './todos-container.style';
import { getTodoById, deleteTodo } from 'services/Todo-services';
import { useParams, useHistory } from 'react-router-dom';
import TodoCard from '../todo-card/todo-card';
import TitleComponent from '../title/title';
import { BackLink } from 'components/link/link.style';

export default function TodoDetails() {
  const [todo, setTodo] = useState<Partial<TodoProps>>({
    title: '',
    description: '',
  });

  const navigate = useHistory();
  const { id }: { id: string } = useParams();

  const getTodo = useCallback(async () => {
    const todo = await getTodoById(id);
    if (todo) {
      setTodo(todo);
    }
  }, [id]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  const deleteTodoById = async (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmDelete) {
      const result = await deleteTodo(id);
      if (result) {
        navigate.push('/');
      }
    }
  };

  return (
    <TodosContainer>
      <S.FlexContainerCenter>
        <BackLink href="/" title="Back">
          {'<<'}
        </BackLink>
        <TitleComponent title={`Details Todo: ${todo.id}`} />
      </S.FlexContainerCenter>
      <TodoCard
        title={todo.title || ''}
        description={todo.description || ''}
        id={id}
        onCLickDelete={deleteTodoById}
      ></TodoCard>
    </TodosContainer>
  );
}
