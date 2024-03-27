import { FormCreateTodo } from 'components/form-create-todo/form-create-todo';
import Title from 'components/title/title';
import React from 'react';
import * as S from 'style';
import { BackLink } from '../components/link/link.style';
export default function CreateTodoPage() {
  return (
    <S.PageContainer>
      <S.FlexContainerCenter>
        <BackLink href="/" title="Back">
          {'<<'}
        </BackLink>
        <Title title="Create Todo" />
      </S.FlexContainerCenter>
      <FormCreateTodo />
    </S.PageContainer>
  );
}
