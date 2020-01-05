import React, { FunctionComponent, useRef  } from 'react';
import styled from 'styled-components';
import { CommentData } from 'store/types';

interface Props {
  onSubmit?: (id: number, data: CommentData ) => void;
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

const CommentForm: FunctionComponent<Props> = ({onSubmit, id}) => {
  const commentInput = useRef<HTMLInputElement>();
  const nameInput = useRef<HTMLInputElement>();

  const handleOnSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = {comment: commentInput.current.value, name: nameInput.current.value }
    onSubmit(id, data)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <StyledInput placeholder="Ваше имя" ref={nameInput} type="text"/>
      <StyledInput placeholder="Ваш комментарий" ref={commentInput} type="text"/>
      <StyledButton>Оставить комментарий</StyledButton>
    </form>
  )
}

export default CommentForm;
