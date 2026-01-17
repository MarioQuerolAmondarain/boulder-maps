import { InfoIcon, InstagramIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import BoulderProvider from "@/providers/BoulderProvider";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
                  <Pressable>
                    <InfoIcon />
                  </Pressable>
                </Link>
                {/* <Link asChild href="/https://www.instagram.com/bouldermapsapp/"> */}
                <Pressable
                  onPress={() => {
                    alert("We are working on it! 🚧");
                  }}
                >
                  <InstagramIcon />
                </Pressable>
                {/* </Link> */}
              </View>
            ),
          }}
        />
      </BoulderProvider>
    </GestureHandlerRootView>
  );
}
