import { configureStore } from '@reduxjs/toolkit';
import { extensionsApi } from './queries/extensionsQueries';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [extensionsApi.reducerPath]: extensionsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(extensionsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
