import { RouterProvider } from 'react-router-dom';
import { router } from './routing/Routing';
import React from 'react';
import store from '../shared/store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
