import React from 'react';
import { TodoProps } from '@types';
import * as S from 'style';
import { TodoCardContainer } from './todo-card.style';
import TitleComponent from '../title/title';
import { formateTitle } from 'helpers/formatter-title';
import { ButtonDelete } from 'components/button/button.style';
import Link from 'components/link/link';
interface TodoCardProps extends TodoProps {
  onCLickDelete: (id: string) => void;
}

export default function TodoCard({
  id,
  title,
  description,
  onCLickDelete,
}: TodoCardProps) {
  return (
    <TodoCardContainer>
      <S.FlexContainer justify="space-between">
        <Link title={formateTitle(title)} href={`/todo/${id}`}>
          <TitleComponent title={formateTitle(title)} />
        </Link>
        <ButtonDelete title="Delete" onClick={() => onCLickDelete(id)}>
          X
        </ButtonDelete>
      </S.FlexContainer>
      <S.Paragraph>{description}</S.Paragraph>
    </TodoCardContainer>
  );
}
