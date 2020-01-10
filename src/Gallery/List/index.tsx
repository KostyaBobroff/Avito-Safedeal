import React from 'react';
import Image from './Image';
import { ImageType } from 'Gallery/types';

interface Props {
  images: ImageType[];
}

export default function List({ images }: Props) {
  return (
  <>
    {images.map((image: ImageType) => 
      <Image key={image.id} id={image.id} url={image.url} />)
    }
  </>
)};