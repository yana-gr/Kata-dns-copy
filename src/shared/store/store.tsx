import { configureStore } from '@reduxjs/toolkit';
import shops from './shopSlice';
import { vacansiesSlide } from 'shared/api/vacansiesSlice';

const store = configureStore({
  reducer: {
    shops,
    [vacansiesSlide.reducerPath]: vacansiesSlide.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacansiesSlide.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
