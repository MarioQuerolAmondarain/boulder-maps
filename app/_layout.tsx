import { InfoIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTitle: "",
        headerLeft: () => <Logo />,
        headerRight: () => (
          <Link asChild href="/about">
            <Pressable>
              <InfoIcon />
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}
