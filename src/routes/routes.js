import {
  addnewProduct,
  getProducts,
  getProductWithID,
} from '../controllers/controllers';

const routes = (app) => {
  app.route('/products').post(addnewProduct).get(getProducts);
  app.route('/products/:ProductId').get(getProductWithID);
};

export default routes;
