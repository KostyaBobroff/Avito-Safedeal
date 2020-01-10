import React, { FunctionComponent, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from "react-router";
import { useHistory } from "react-router-dom";

import Comment from './Comment';
import CommentForm from './CommentForm';
import Modal from 'ui/Modal';
import Loader from 'ui/Loader';
import { useImageContent } from 'Gallery/hooks';

type Props = {
  handleListOverflow: (flag: boolean) => void;
};

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
    padding-bottom: 48px; 
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

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ImageModal: FunctionComponent<RouteComponentProps<{id: string}> & Props> = ({match: {params: {id}}, handleListOverflow}) => {
  const history = useHistory();
  const [imageData, isPending, postComment] = useImageContent(+id);

  const onSubmit = postComment;

  useEffect(() => {
    handleListOverflow(true);
  }, [id]);

  const onClose = useCallback(() => {
    handleListOverflow(false);
    history.push('/');
  }, []);

  return (
    <Modal isOpen onClose={onClose}>
      {!isPending ? (
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
        </>) : (
        <LoaderWrapper>
          <Loader/>
        </LoaderWrapper>
      )}
    </Modal>
  )
};

export default ImageModal;