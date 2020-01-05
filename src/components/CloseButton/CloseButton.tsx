import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Close from './Close.svg';
import ROUTES from 'utils/routes';

const StyledCloseButton = styled(Link)`
  background: no-repeat 50% 50%;
  background-size: contain;
  width: 18px;
  height: 18px;
  background-image: url("${Close}");
  position: absolute;
  top: 21px;
  display: block;
  right: 21px; 
`;

const CloseButton: FunctionComponent<{}> = () => <StyledCloseButton to={ROUTES.INDEX}/>

export default CloseButton;