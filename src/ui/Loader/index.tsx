import styled from 'styled-components';

import loader from './loader.svg';

const Loader = styled.div.attrs((props) => ({
  top: '50%',
  left: '50%',
  position:'absolute'
}))`
  background: no-repeat 50% 50%;
  background-size: contain;
  width: 20%;
  height: 20%;
  background-image: url("${loader}");
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};;
  transform: translate(-${props => props.left}, -${props => props.top});
`;


export default Loader;