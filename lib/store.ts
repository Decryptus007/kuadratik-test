import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";
import saveSlice from "./saveSlice";
import { apiSlice } from "./apiSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const savePersistConfig = {
  key: "save",
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
const persistedSaveReducer = persistReducer(savePersistConfig, saveSlice);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: persistedCartReducer,
    save: persistedSaveReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
