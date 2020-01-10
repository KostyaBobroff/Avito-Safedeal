import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'

import Header from './Header';
import Footer from './Footer';

import Gallery from 'Gallery';

const GlobalStyle = createGlobalStyle`
  body, #root, html {
    height: 100%;
    margin: 0;
    font-family:  Roboto Condensed;
  }
  #root {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
`
const App: FunctionComponent<{}> = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Gallery />
      <Footer /> 
    </>
  );
}

export default App;