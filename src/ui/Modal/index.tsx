import React, { 
  FunctionComponent,
  useCallback,
  SyntheticEvent,
  KeyboardEventHandler,
  useRef,
  useEffect
} from 'react';
import styled from 'styled-components';

import CloseButton from './CloseButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface ModalWrapperProps {
  isOpen: boolean;
}

const ModalWrapper = styled.div`
  position: ${(props: ModalWrapperProps) => props.isOpen ? 'fixed' : 'static'};
  display: ${(props: ModalWrapperProps) => props.isOpen ? 'flex' : 'none'};
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

const Modal: FunctionComponent<Props> = ({isOpen, onClose, children}) => {
  const backdropElement = useRef<HTMLDivElement>();
  const handleOnClick = useCallback((event: SyntheticEvent) =>
    event.target === backdropElement.current && onClose(),[]);

  useEffect(()=> {
    const handleEscKeyEvent = (event: KeyboardEvent) => {
      event.code === ESC_KEY && onClose();
    };
    document.addEventListener('keydown', handleEscKeyEvent);
    return () => {
      document.removeEventListener('keydown', handleEscKeyEvent);
    }
  }, []);

  return (
    <ModalWrapper ref={backdropElement} isOpen={isOpen} onClick={handleOnClick}>
      <StyledModal>
        <CloseButton onClose={onClose}/>
        {children}  
      </StyledModal>
    </ModalWrapper>
  )
}

export default Modal;