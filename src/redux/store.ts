import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice";
import messageReducer from "./messageSlice"
import blogReducer from './blogSlice';
import applicantReducer from "./applicantSlice"
import projectReducer from "./projectSlice"
import testimonialReducer from "./testimonialSlice"


import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth:authReducer,
  job:jobReducer,
  message: messageReducer,
  blogs:blogReducer,
  applicants: applicantReducer,
  projects:projectReducer,
  testimonials:testimonialReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Optional: Define types for RootState and AppDispatch for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
