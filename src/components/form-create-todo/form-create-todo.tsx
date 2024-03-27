import React, { useRef, useState } from 'react';
import * as S from 'style';
import { Button } from '../button/button.style';
import { FormContainer } from '../form-container/form-container';
import { createTodo } from 'services/Todo-services';
import { useHistory } from 'react-router-dom';
import { validateInputsTitleAndDescription } from 'helpers/validate-todo-fields';
import { Input } from 'components/input/input';

export function FormCreateTodo() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;

    const errorMessage = validateInputsTitleAndDescription(title, description);
    if (!errorMessage) {
      createTodo({
        title,
        description,
      });
      navigate.push('/');
    }
    if (errorMessage) setErrorMessage(errorMessage);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <S.FlexContainer>
        <S.Label htmlFor="title">Title:</S.Label>
        <Input type="text" name="title" id="title" ref={titleRef} />
      </S.FlexContainer>

      <S.Label htmlFor="description">Description:</S.Label>
      <S.TextArea name="description" id="description" ref={descriptionRef} />
      {errorMessage && <S.ErrorMensage>{errorMessage}</S.ErrorMensage>}

      <Button type="submit" title="Create">
        Create
      </Button>
    </FormContainer>
  );
}
