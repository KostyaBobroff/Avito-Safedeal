import moment from 'moment';
import { ImageDataType, CommentPostDataType } from 'Gallery/types';


const API_URLS = {
  IMAGES: 'https://boiling-refuge-66454.herokuapp.com/images',
  IMAGE_CONTENT: {
    mask: 'https://boiling-refuge-66454.herokuapp.com/images/:id',
    create: (id: number) => `https://boiling-refuge-66454.herokuapp.com/images/${id}`
  },
  POST_COMMENT: {
    mask: 'https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments',
    create: (id: number) => `https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`
  }
};

export default class GalleryApi {
  static async loadImages() {
    const response = await fetch(API_URLS.IMAGES);
    return response.json();
  }
  static async loadImageContent(id: number) {
    const response = await fetch(API_URLS.IMAGE_CONTENT.create(id));
    const data: ImageDataType = await response.json();
    const newCommnets = data.comments.map(({id, text, date}) => ({id, text, date: moment(date).format("DD.MM.YY")}));
    return {...data, comments: newCommnets};
  }
  static async postComment(id: number, data: CommentPostDataType) {
    return fetch(API_URLS.POST_COMMENT.create(id), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}