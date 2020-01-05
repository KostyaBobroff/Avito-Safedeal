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

export default API_URLS;