import React from 'react';
import styled from 'styled-components';

import loader from './loader.svg';

const Loader = styled.div`
  background: no-repeat 50% 50%;
  background-size: contain;
  width: 20%;
  height: 20%;
  background-image: url("${loader}");
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loader;