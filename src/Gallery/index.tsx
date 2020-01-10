import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';

import List from './List';
import Loader from 'ui/Loader';
import galleryStore from './store';
import { ImageType } from 'Gallery/types';
import ImageModal from './ImageModal';


const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const Gallery: FunctionComponent<{}> = observer(() => {
  const images: ImageType[] = galleryStore.images;
  const status = galleryStore.imagesLoadStatus;
  const [overflowOfList, setOverflowOfList] = useState(false);

  const cssOverflow = overflowOfList ? {overflow: 'hidden'} : {overflow: 'auto'};

  const renderContent = () => {
    return (!status || status === 'pending') ? (
      <Loader/>
    ) : (
      <List images={images}/>
    );
  };
  return (
    <div style={{flex:1, ...cssOverflow }}>
      <StyledGallery>
        {renderContent()}
      </StyledGallery>
      <Route path={'/:id'} render={(props) => (
        <ImageModal {...props} handleListOverflow={setOverflowOfList}/> 
      )} />
    </div>
  )
});

export default Gallery;