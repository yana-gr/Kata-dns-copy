import { createBrowserRouter } from 'react-router-dom';
import Main from 'pages/main';
import ShopListPage from 'pages/shop-list-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'career',
    children: [
      {
        index: true,
        element: <h2>22</h2>,
      },
    ],
  },
  {
    path: 'shop-list',
    children: [
      {
        index: true,
        element: <ShopListPage />,
      },
    ],
  },
]);
