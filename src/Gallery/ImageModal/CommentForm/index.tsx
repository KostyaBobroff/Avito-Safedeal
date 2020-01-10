import React, { FunctionComponent, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { CommentPostDataType } from 'Gallery/types';

interface Props {
  onSubmit?: (id: number, data: CommentPostDataType ) => void;
  id: number;
}

const StyledInput = styled.input`
  display: block;
  border: 1px solid #CCCCCC;
  padding: 8px 0 8px 11px;
  border-radius: 3px;
  font-size: 13px;
  line-height: 15px;
  font-family: Roboto;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: #CCCCCC;
  }
`;

const StyledButton = styled.button`
  display: block;
  
  background-color: #4997D0;
  border-radius: 3px;
  font-size: 13px;
  line-height: 15px;
  font-family: Roboto;
  text-align: center;
  padding: 8px 0;
  color: #FFFFFF;
  width: 100%;
  box-sizing: border-box;
`;

const Error = styled.div`
  color: red;
  font-size: 13px;
  font-family: Roboto;
  line-height: 15px;
  padding-bottom: 10px;
`;

const Form = styled.form`
  @media (max-width: 768px) {
    padding: 0 22px;
  }
`;

const CommentForm: FunctionComponent<Props> = ({onSubmit, id}) => {
  const commentInput = useRef<HTMLInputElement>();
  const nameInput = useRef<HTMLInputElement>();
  const [validationData, setValidation] = useState({isValid: true, text: ''});
  const validation = useCallback((name, comment) => {
    if (!name) {
      setValidation({isValid: false, text: 'Введите ваше имя'});
      return false;
    }
    if (!comment) {
      setValidation({isValid: false, text: 'Введите комментарий'});
      return false;
    }
    setValidation({isValid: true, text: ''});
    return true; 
  }, [nameInput, commentInput]);

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const name = nameInput.current.value.trim();
    const comment = commentInput.current.value.trim();
    if (!validation(name, comment)) {
      return;
    }

    onSubmit(id, {comment, name})
  }
  return (
    <Form onSubmit={handleOnSubmit}>
      {!validationData.isValid && <Error>{validationData.text}</Error>}
      <StyledInput placeholder="Ваше имя" ref={nameInput} type="text"/>
      <StyledInput placeholder="Ваш комментарий" ref={commentInput} type="text"/>
      <StyledButton>Оставить комментарий</StyledButton>
    </Form>
  )
}

export default CommentForm;
