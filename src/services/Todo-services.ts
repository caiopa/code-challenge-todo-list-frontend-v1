import axios from 'axios';

import { TodoProps } from '@types';

export async function getAllTodos() {
  try {
    const { data } = await axios.get('http://localhost:4000/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTodoById(id: string) {
  try {
    const response = await axios.get(`http://localhost:4000/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todo por ID:', error);
    throw error;
  }
}

export async function createTodo({ title, description }: Partial<TodoProps>) {
  try {
    const data = await axios.post('http://localhost:4000/todos', {
      title,
      description,
    });
    return `Todo ${data.data.id} created`;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id: string) {
  try {
    const { data } = await axios.delete(`http://localhost:4000/todos/${id}`);
    return data;
  } catch (error) {
    return console.log(error);
  }
}
