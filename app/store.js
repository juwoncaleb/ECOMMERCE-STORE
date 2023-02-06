import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import cartReducer from "../redux/cartSlice"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
const persistConfig = {
    key: process.env.NEXT_PUBLIC_FINGERPRINT_NAME,
    storage,
    whitelist: ['cart'],
 };

 const rootReducer = combineReducers({
    cart: cartReducer,
 });

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

 
const persistor = persistStore(store);
export { store, persistor };