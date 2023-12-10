import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopsApi } from '../services/shoplist.service';
import shopFilter from './filterShopSlice';
import shopsReducer from './shopSlice';

const store = configureStore({
  reducer: { [shopsApi.reducerPath]: shopsApi.reducer, shopFilter, shopsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
