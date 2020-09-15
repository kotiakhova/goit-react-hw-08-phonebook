import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";
import authReducer from "./auth/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
