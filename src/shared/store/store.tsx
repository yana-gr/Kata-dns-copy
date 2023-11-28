import { configureStore } from '@reduxjs/toolkit';

import shops from './shopSlice';

const store = configureStore({
  reducer: { shops },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
