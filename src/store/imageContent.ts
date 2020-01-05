import { observable, action} from 'mobx';
import API_URLS from 'utils/apiUrls';
import { ImageData, NetworkStatus } from 'store/types';
import noramlizeImageData from 'utils/normalizeImageData';

import { CommentData } from './types';

class ImageContent {
  @observable imageData?: ImageData;
  @observable status?: NetworkStatus;

  @action fetchImageData = async (id: number) => {
    this.status = 'pending';
    const response = await fetch(API_URLS.IMAGE_CONTENT.create(id));
    const data = await response.json();
    this.imageData = noramlizeImageData(data);
    console.log(noramlizeImageData(data));
    this.status = 'done';
  }

  @action postComment = async (id: number, data: CommentData) => {
    const response = await fetch(API_URLS.POST_COMMENT.create(id), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await this.fetchImageData(id);
  }
}

const imageContentStore = new ImageContent();

export default imageContentStore;