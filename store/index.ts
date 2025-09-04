import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import todoReducer from './slices/todoSlice';
import { baseApi } from './api/baseApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLUSH, PAUSE, persistReducer, PURGE, REHYDRATE, REGISTER, createTransform } from 'redux-persist';
import { PERSIST } from 'redux-persist/es/constants';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const reducers = combineReducers({
  app: appReducer,
  todo: todoReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof reducers>;

const rtkQueryTransform = createTransform((inboundState: any) => {
  return undefined;
}, (outboundState: any) => {
  return undefined;
}, {
  whitelist: [baseApi.reducerPath],
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  reducer: reducers,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;