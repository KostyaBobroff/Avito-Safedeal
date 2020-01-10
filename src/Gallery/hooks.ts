import {useCallback, useState, useEffect} from 'react';

import { CommentPostDataType, ImageType, ImageDataType } from './types';
import GalleryApi from './GalleryApi';

export const useImages: () => [ImageType[], boolean] = () => {
  const [images, setImages] = useState([]);
  const [isPending, setIsPending] = useState(true);
  
  const fetchImages = useCallback(async () => {
    setIsPending(true);
    const imagesFromApi = await GalleryApi.loadImages();
    setImages(imagesFromApi);
    setIsPending(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, []);

  return [images, isPending];
};

export const useImageContent: (id: number) => 
  [ImageDataType, boolean, (id: number, comment: CommentPostDataType) => void] = (id) => {
  const [imageData, setImage] = useState();
  const [isPending, setIsPending] = useState(true);

  const fetchImageInfo = useCallback(async (id) => {
    setIsPending(true);
    const imageFromApi = await GalleryApi.loadImageContent(id);
    setImage(imageFromApi);
    setIsPending(false);
  }, [id]);
  
  const postComment = useCallback((id: number, comment: CommentPostDataType) => {
    GalleryApi.postComment(id, comment);
    fetchImageInfo(id);
  }, [id]);

  useEffect(() => {
    fetchImageInfo(id);
  }, [id]);

  return [imageData, isPending, postComment];
};
