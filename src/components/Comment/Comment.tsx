import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Comment as CommentType} from 'store/types';


interface Props {
  comment: CommentType;
}

const StyledComment = styled.div`
  padding-bottom: 20px;
  font-size: 13px;
  line-height: 15px;
  font-family: Roboto;
`; 

const Date = styled.div`
  color: #999999;
  font-size: 13px;
  line-height: 15px;
  font-family: Roboto;
  padding-bottom: 5px;
`; 

const Comment: FunctionComponent<Props> = ({comment: {date, text}}) => {
  return (
    <StyledComment>
      <Date>{date}</Date>
      {text}
    </StyledComment>
  );
}

export default Comment;
