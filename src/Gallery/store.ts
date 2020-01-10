import { observable, action} from 'mobx';

import GalleryApi from './GalleryApi';
import { ImageType, NetworkStatusType, CommentPostDataType, ImageDataType } from 'Gallery/types';

class Gallery {
  @observable images: ImageType[] = [];
  @observable imagesLoadStatus?: NetworkStatusType;
  @observable imageContentLoadStatus?: NetworkStatusType;
  @observable imageData?: ImageDataType;

  constructor() {
    this.fetchImages();
  }

  @action fetchImages = async () => {
    this.imagesLoadStatus = 'pending';
    this.images = await GalleryApi.loadImages();
    this.imagesLoadStatus = 'done';
  }

  @action fetchImageContent = async (id: number) => {
    this.imageContentLoadStatus = 'pending';
    this.imageData = await GalleryApi.loadImageContent(id);
    this.imageContentLoadStatus = 'done';
  }

  @action postComment = async (id: number, data: CommentPostDataType) => {
    await GalleryApi.postComment(id, data);
    await this.fetchImageContent(id);
  }
}

const galleryStore = new Gallery();

export default galleryStore;