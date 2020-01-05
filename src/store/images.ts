import { observable, action} from 'mobx';
import API_URLS from 'utils/apiUrls';
import { Image, NetworkStatus } from 'store/types';

class Images {
  @observable images: Image[] = [];
  @observable status?: NetworkStatus;

  constructor() {
    this.fetchImages();
  }

  @action fetchImages = async () => {
    this.status = 'pending';
    const response = await fetch(API_URLS.IMAGES);
    const images = await response.json();
    this.images = images;
    this.status = 'done';
  }
}

const imagesStore = new Images();

export default imagesStore;