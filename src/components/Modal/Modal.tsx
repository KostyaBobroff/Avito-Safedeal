import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from "react-router";
import { observer } from 'mobx-react-lite';

import CloseButton from 'components/CloseButton';
import CommentForm from 'components/CommentForm';
import Comment from 'components/Comment';
import imageContentStore from 'store/imageContent';

interface ModalWrapperProps {
  isOpen: boolean;
};

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
  height: 425px;
  box-sizing: border-box;
  background-color: white;
  padding: 30px;
`;

const StyledCommentFormWrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding-right: 2%;
  vertical-align: top;
`;

const Comments = styled.div`
  display: inline-block;
  width: 48%;
  vertical-align: top;
`;

const StyledImage = styled.img`
  display: block;
  height: 205px;
  margin-bottom: 30px;
  width: 100%;
`;

const Modal: FunctionComponent<RouteComponentProps<{id: 'string'}>> = observer(({match: {params: {id}}}) => {
  const isOpen = !!id;
  const imageData = imageContentStore.imageData
  const isLoading = !imageContentStore.status || imageContentStore.status === 'pending';
  const onSubmit = imageContentStore.postComment;
  useEffect(() => {
    imageContentStore.fetchImageData(+id);
  }, [id]);

  return (
    <ModalWrapper isOpen={isOpen}>
      <StyledModal>
        <CloseButton />
        {!isLoading && (
          <>
          <StyledCommentFormWrapper>
            <StyledImage src={imageData.url}/>
            <CommentForm onSubmit={onSubmit} id={Number(id)}/>
          </StyledCommentFormWrapper>
          <Comments>
            {imageData.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
          </Comments>
        </>
      )}  
      </StyledModal>
    </ModalWrapper>
  )
})

export default Modal;