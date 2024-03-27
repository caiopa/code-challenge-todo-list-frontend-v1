import React from 'react';
import { Title } from './title.style';
export default function TitleComponent({ ...props }) {
  return <Title>{props.title}</Title>;
}
