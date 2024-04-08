import React from 'react';
import * as S from './link.style';
export default function Link({ ...props }) {
  return (
    <S.Link href={props.href} color={props.color}>
      {props.title}
    </S.Link>
  );
}
