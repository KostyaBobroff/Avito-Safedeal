import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import List from './List';
import ImageModal from './ImageModal';

const GalleryWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: ${(props: {overFlow: 'hidden' | 'auto'}) => props.overFlow };
  flex-direction: column;
`;

const StyledGallery = styled.div`
  flex:1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  grid-column-gap: 20px;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const Gallery: FunctionComponent<{}> = () => {
  const [overflowOfList, setOverflowOfList] = useState(false);
  const cssOverflow = overflowOfList ?  'hidden' : 'auto';

  return (
    <GalleryWrapper overFlow={cssOverflow}>
      <StyledGallery>
        <List/>
      </StyledGallery>
      <Route path={'/:id'} render={(props) => (
        <ImageModal {...props} handleListOverflow={setOverflowOfList}/> 
      )} />
    </GalleryWrapper>
  )
};

export default Gallery;