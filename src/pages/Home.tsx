import TodosContainer from 'components/todos-container/todos-container';
import Header from '../components/header/header';
import React from 'react';
import * as S from 'style';
import Title from 'components/title/title';

function Home() {
  return (
    <S.MainPage>
      <Header />
      <Title title="Todos List" />
      <TodosContainer />
    </S.MainPage>
  );
}

export default Home;
