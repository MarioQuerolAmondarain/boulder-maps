import BoulderProvider from "@/providers/BoulderProvider";
import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

// TODO igual refactorizar y que no aparezca siempre el logo en el header
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BoulderProvider>
          {/* TODO verificar si es el mejor sitio para el contexto de BoulderProvider */}
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </BoulderProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
