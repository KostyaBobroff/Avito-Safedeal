import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ROUTES from 'utils/routes';

const StyledImageWrapper = styled.div`
  display: block;
  box-sizing:border-box;
  margin-top: 30px;
  width: 229px;
  height: 142px;
  
  padding: 0 10px;
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
  // onClick: () => void;
  id: number;
}
const Image: FunctionComponent<Image> = ({ url, id }) => {
  return (
    <StyledImageWrapper>
      <StyledLink to={ROUTES.IMAGE.create(id)}>
        <StyledImage src={url} />
      </StyledLink>
    </StyledImageWrapper>
  );
}

export default Image;