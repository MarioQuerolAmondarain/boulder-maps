import { Boulder } from "@/types/Boulder";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function BoulderDetails() {
  const { boulderData } = useLocalSearchParams();
  const boulder: Boulder = boulderData
    ? JSON.parse(boulderData as string)
    : null;

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `Details`,
          headerLeft: () => null,
          headerRight: () => null, // Boton de share/like?
        }}
      />
      <View>
        {boulder && (
          <View style={{ padding: 20 }}>
            <Text>Name: {boulder.name}</Text>
            <Text>Grade: {boulder.grade}</Text>
            <Text>Description: {boulder.description}</Text>
          </View>
        )}
      </View>
    </>
  );
}
