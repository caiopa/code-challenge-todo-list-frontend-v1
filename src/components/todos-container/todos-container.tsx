import { TodoProps } from '@types';
import { deleteTodo, getAllTodos } from 'services/Todo-services';
import React, { useEffect, useState } from 'react';
import TodoCard from '../todo-card/todo-card';
import { TodoContainer } from './todos-container.style';

function TodosContainer() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleDeleteTodoById = async (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this todo?'
    );
    if (confirmDelete) {
      await deleteTodo(id);
      const data = await getAllTodos();
      setTodos(data);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <TodoContainer>
      {todos?.map((todo, index) => (
        <TodoCard
          key={index}
          title={todo.title}
          description={todo.description}
          id={todo.id}
          onCLickDelete={handleDeleteTodoById}
        />
      ))}
    </TodoContainer>
  );
}

export default TodosContainer;
