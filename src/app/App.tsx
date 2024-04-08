import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routers/routers';

import { GlobalStyle } from 'style';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes />
  </BrowserRouter>
);

export default App;
