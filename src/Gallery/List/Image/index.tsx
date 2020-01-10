import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledImageWrapper = styled.div`
  margin-top: 30px; 
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
`
const StyledImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

interface Image {
  url: string;
  id: number;
}
const Image: FunctionComponent<Image> = ({ url, id }) => {
  return (
    <StyledImageWrapper>
      <StyledLink to={`/${id}`}>
        <StyledImage src={url} />
      </StyledLink>
    </StyledImageWrapper>
  );
}

export default Image;