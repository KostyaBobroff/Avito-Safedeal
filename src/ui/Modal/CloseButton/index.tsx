import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Close from './Close.svg';

const StyledCloseButton = styled.div`
  background: no-repeat 50% 50%;
  background-size: contain;
  width: 18px;
  height: 18px;
  background-image: url("${Close}");
  position: absolute;
  top: 21px;
  display: block;
  right: 21px;
  cursor: pointer;
`;

interface Props {
  onClose: () => void;
}

const CloseButton: FunctionComponent<Props> = ({onClose}) => <StyledCloseButton onClick={onClose}/>

export default CloseButton;