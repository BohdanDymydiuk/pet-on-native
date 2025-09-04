import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }} />
      </PersistGate>
    </Provider>
  );
}
