import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  border-top: 1px solid #CCCCCC;
  color: #CCCCCC;
  font-size: 14px;
  line-height: 16px;
  font-family: Roboto Condensed;
  text-align: center;
  padding: 12px 0;
  margin-top: 30px;
`;

const Footer: FunctionComponent<{}> = () => {
  return(
    <StyledFooter>
      © 2018-2019
    </StyledFooter>
  );
};

export default Footer;