import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding-top: 15px;
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  font-family:  Roboto Condensed;
`

const Header: FunctionComponent<{}> = () => {
  return(
    <StyledHeader>
      Avito Safedeal
    </StyledHeader>
  )
}

export default Header;