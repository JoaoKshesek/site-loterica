import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ** Reducers - API
import { authApi } from "./queries/authApi";
import { homeApi } from "./queries/homeApi";

// ** Reducers - Commom
import { authSlice } from "./reducers/commom/auth";

// ** Reducers - Modules
import { homeModuleSlice } from "./reducers/modules/home-module";

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [homeApi.reducerPath]: homeApi.reducer,

  [authSlice.name]: authSlice.reducer,
  [homeModuleSlice.name]: homeModuleSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: [authSlice.name],
  },
  reducers
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([
      authApi.middleware,
      homeApi.middleware,
    ]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
