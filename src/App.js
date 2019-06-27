import React, { Fragment } from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Header />
      <Routes />
    </Fragment>
  </BrowserRouter>
);

export default App;
