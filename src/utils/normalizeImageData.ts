
import moment from 'moment';
import { ImageData } from 'store/types';

const noramlizeImageData = (data: ImageData) => {
  const newCommnets = data.comments.map(({id, text, date}) => ({id, text, date: moment(date).format("DD.MM.YY")}));
  return {...data, comments: newCommnets}
}

export default noramlizeImageData;