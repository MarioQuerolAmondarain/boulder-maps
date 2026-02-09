import { Tabs } from "expo-router";

import {
  MapIcon,
  SearchIcon,
  SetterIcon,
  UserIcon,
} from "@/components/ui/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="areas"
        options={{
          title: "Areas",
          tabBarIcon: ({ color }) => <MapIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => <SearchIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Me",
          tabBarIcon: ({ color }) => <UserIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="setter"
        options={{
          title: "Setter Tools",
          tabBarIcon: ({ color }) => <SetterIcon size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
