import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routing';
import '../shared/base.scss';
import React from 'react';

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
