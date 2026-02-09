import { InfoIcon, InstagramIcon } from "@/components/ui/Icons";
import Logo from "@/components/ui/Logo";
import BoulderProvider from "@/providers/BoulderProvider";
import { Link, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// TODO igual refactorizar y que no aparezca siempre el logo en el header
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <BoulderProvider>
        {/* TODO verificar si es el mejor sitio para el contexto de BoulderProvider */}
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "white" },
            headerTitle: "",
            headerLeft: () => <Logo />,
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 15 }}>
                <Link asChild href="/about">
                  <TouchableOpacity>
                    <InfoIcon />
                  </TouchableOpacity>
                </Link>
                {/* <Link asChild href="/https://www.instagram.com/bouldermapsapp/"> */}
                <TouchableOpacity
                  onPress={() => {
                    alert("¡Estamos trabajando en ello! 🚧");
                  }}
                >
                  <InstagramIcon />
                </TouchableOpacity>
                {/* </Link> */}
              </View>
            ),
          }}
        />
      </BoulderProvider>
    </GestureHandlerRootView>
  );
}
