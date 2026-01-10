import { InfoIcon, InstagramIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";

export default function RootLayout() {
  return (
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
  );
}
