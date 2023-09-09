import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Login from '@/components/Auth/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Checkout from '@/pages/Checkout';
import Signup from '@/components/Auth/Signup';
import PrivateRoute from './PrivateRoute';
import Products from '@/redux/features/products/Products';
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
        element: (
          <PrivateRoute>
            <Checkout />,
          </PrivateRoute>
        ),
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
