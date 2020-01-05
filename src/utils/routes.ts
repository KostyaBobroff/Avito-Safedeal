const INDEX = '/';

const ROUTES = {
  INDEX,
  IMAGE: {
    mask: `${INDEX}:id`,
    create: (id: number) => `${INDEX}${id}`
  }
}

export default ROUTES;