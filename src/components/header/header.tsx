import React from 'react';
import Link from 'components/link/link';
import * as S from 'style';
import { HeaderContainer } from './header.style';
import TitleComponent from 'components/title/title';

function Header() {
  return (
    <HeaderContainer>
      <S.FlexContainer justify="space-evenly">
        <TitleComponent title="Welcome !" />
        <Link title="+ Add" href="/create-todo" color="white"></Link>
      </S.FlexContainer>
    </HeaderContainer>
  );
}

export default Header;
