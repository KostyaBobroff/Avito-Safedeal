import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from "react-router";
import { observer } from 'mobx-react-lite';

import CloseButton from 'components/CloseButton';
import CommentForm from 'components/CommentForm';
import Loader from 'components/Loader';
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

const StyledCommentFormWrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding-right: 2%;
  vertical-align: top;
  @media (max-width: 768px) {
    padding-right:0;
    width: 100%;
    display: flex;
    min-height: 640px;
    height: 100%;
    flex-direction: column;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
`;

const Comments = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: inline-block;
  width: 48%;
  vertical-align: top;
`;

const MobileComments = styled.div`
  display: none;
  @media (max-width: 768px) {
    padding: 0 22px;
    display: block;
    overflow: auto;
    flex: 1; 
  }
`;

const StyledImage = styled.img`
  display: block;
  height: 205px;
  margin-bottom: 30px;
  width: 100%;
`;

// const Loader = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

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
        {!isLoading ? (
          <>
          <StyledCommentFormWrapper>
            <StyledImage src={imageData.url}/>
            <MobileComments >
              {imageData.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </MobileComments>
            <CommentForm onSubmit={onSubmit} id={Number(id)}/>
          </StyledCommentFormWrapper>
          <Comments>
            {imageData.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
          </Comments>
        </>
      ) : (<Loader/>)}  
      </StyledModal>
    </ModalWrapper>
  )
})

export default Modal;