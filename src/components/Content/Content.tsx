import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Image from 'components/Image';
import imagesStore from 'store/images';
import { Image as ImageType} from 'store/types';

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  grid-column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content: FunctionComponent<{}> = observer(() => {
  const images: ImageType[] = imagesStore.images;
  const status = imagesStore.status;
  const renderContent = () => {
    return (!status ||status === 'pending') ? (
      <Loader>Загрузка фоточек...</Loader>
    ) : (
      images.map((image: ImageType) => 
        <Image key={image.id} id={image.id} url={image.url} />
      )
    );
  };
  console.log(imagesStore.status);
  return (
    <div style={{flex:1}}>
      <StyledContent>
        {renderContent()}
      </StyledContent>
    </div>
  )
});

export default Content;