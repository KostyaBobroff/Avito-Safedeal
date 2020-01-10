import React, { 
  FunctionComponent,
  useCallback,
  SyntheticEvent,
  useRef,
  useEffect,
  MutableRefObject
} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import CloseButton from './CloseButton';

const GlobalModalStyles = createGlobalStyle`
  .noscroll-container {
    overflow: hidden;
  }
`;

interface Props {
  onClose: () => void;
  container: MutableRefObject<HTMLElement>;
  children: React.ReactNode;
}

const ModalWrapper = styled.div`
  position:  fixed;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 619px;
  box-sizing: border-box;
  background-color: white;
  padding: 30px;
  min-height:425px;
  @media (max-width: 768px) {
    min-height:unset;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0;
    max-height: 100%;
  }
`;

const ESC_KEY = 'Escape';

const Modal: FunctionComponent<Props> = ({ onClose, children, container }) => {
  const backdropElement = useRef<HTMLDivElement>();

  const handleOnClick = useCallback((event: SyntheticEvent) =>
    event.target === backdropElement.current && onClose(),[]);

  useEffect(()=> {
    container.current.classList.add('noscroll-container');
    const handleEscKeyEvent = (event: KeyboardEvent) => {
      event.code === ESC_KEY && onClose();
    };
    document.addEventListener('keydown', handleEscKeyEvent);
    return () => {
      container.current.classList.remove('noscroll-container');
      document.removeEventListener('keydown', handleEscKeyEvent);
    }
  }, []);

  return (
    <>
      <GlobalModalStyles/>
      <ModalWrapper ref={backdropElement} onClick={handleOnClick}>
        <StyledModal>
          <CloseButton onClose={onClose}/>
          {children}
        </StyledModal>
      </ModalWrapper>
    </>
  )
}

export default Modal;