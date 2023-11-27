import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routing';
import '../shared/styles/base.scss';
import React from 'react';

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <p>sddsdd</p>
    </React.StrictMode>
  );
};

export default App;
