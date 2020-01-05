import React, {FunctionComponent, useCallback, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';

import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Modal from 'components/Modal';
import ROUTES from 'utils/routes';

const GlobalStyle = createGlobalStyle`
  body, #root, html {
    height: 100%;
    margin: 0;
  }
  #root {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`
const App: FunctionComponent<{}> = () => {
  let history = useHistory();
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer /> 
      <Switch>
        <Route path={ROUTES.IMAGE.mask} render={(props) => <Modal {...props}/>} />
      </Switch>
    </>
  );
}

export default App;