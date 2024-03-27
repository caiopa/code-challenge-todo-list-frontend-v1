import { TodoProps } from '@types';
import { deleteTodo, getAllTodos } from 'services/Todo-services';
import React, { useCallback, useEffect, useState } from 'react';
import TodoCard from '../todo-card/todo-card';
import { TodosContainer } from '../todo-details/todos-container.style';

// import { useHistory } from 'react-router-dom';

function CardsContainer() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  // const navigate = useHistory();

  const allTodos = useCallback(async () => {
    const data = await getAllTodos();
    setTodos(data);
  }, []);

  const deleteTodoById = async (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmDelete) {
      await deleteTodo(id);
      allTodos();
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      await allTodos();
    };
    fetchTodos();
  }, [allTodos]);

  return (
    <TodosContainer>
      {todos?.map((todo, index) => (
        <TodoCard
          key={index}
          title={todo.title}
          description={todo.description}
          id={todo.id}
          onCLickDelete={deleteTodoById}
        />
      ))}
    </TodosContainer>
  );
}

export default CardsContainer;
