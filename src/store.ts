import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useStore as useReduxStore } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import soundTechnicalReducer from './slices/soundFetch';
import soundTrendsReducer from './slices/getTrends';
import jobOffersReducer from './slices/jobOfferFetch';
import progressReducer from './slices/getProgress';

const persistConfig = {
  key: 'root-v2',
  version: 2,
  storage
}

const reducers = combineReducers({
  sounds: soundTechnicalReducer,
  jobOffers: jobOffersReducer,
  trends: soundTrendsReducer,
  progress: progressReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export const useStore = () => useReduxStore<{
  getState: () => RootState
}>()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch