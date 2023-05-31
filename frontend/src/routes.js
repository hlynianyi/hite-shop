/*
  API not allowing to do something with database but provide some "fake" routes.
  So in general there is only one usefull route - getProducts().
*/
const routes = {
  getProducts: () => 'https://fakestoreapi.com/products',
  getProductById: (id) => `https://fakestoreapi.com/products/${id}`,
  getAllCategories: () =>  'https://fakestoreapi.com/products/categories',
  sortResults: () =>  'https://fakestoreapi.com/products?sort=desc',
  getProductsByCategory: () =>  'https://fakestoreapi.com/products/category/',
  addNewProduct: () =>  'https://fakestoreapi.com/products',
  updateProduct: () =>  'https://fakestoreapi.com/products/7',
  deleteProduct: () =>  'https://fakestoreapi.com/products/6',
  getAllCarts: () =>  'https://fakestoreapi.com/carts',
  getSingleCart: () =>  'https://fakestoreapi.com/carts/5',
  addProductInCart: () =>  '',
  getAllUsers: () =>  'https://fakestoreapi.com/users',
  getSingleUser: () =>  'https://fakestoreapi.com/users/',
  addUser: () =>  'https://fakestoreapi.com/users',
  userLogin: () =>  'https://fakestoreapi.com/auth/login',
};

export default routes;