import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import Image from './Image';
import { ImageType } from 'Gallery/types';
import Loader from 'ui/Loader';
import { useImages } from 'Gallery/hooks';

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

 const List: FunctionComponent<{}> = () => {
  const [images, isPending] = useImages();

  return (isPending) ?
    (
      <LoaderWrapper><Loader/></LoaderWrapper>
    ) : (
      <>
      {
        images.map((image: ImageType) =>
          <Image key={image.id} id={image.id} url={image.url} />
        )
      }
      </>
    )
};

export default List;