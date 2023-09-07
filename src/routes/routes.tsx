import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/auth/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/redux/features/products/Products';
import Checkout from '@/pages/Checkout';
import Signup from '@/auth/Signup';
import ProductDetails from '@/redux/features/products/ProductDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
