import React, { FunctionComponent, useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Image from 'components/Image';
import imagesStore from 'store/images';
import { Image as ImageType} from 'store/types';

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  position: relative;
  margin: 0 -10px;
  align-content: flex-start;
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
    <StyledContent>
      {renderContent()}
    </StyledContent>
  )
});

export default Content;