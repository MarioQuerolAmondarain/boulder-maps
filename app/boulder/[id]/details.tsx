import { Boulder } from "@/types/Boulder";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function BoulderDetails() {
  const { boulderData } = useLocalSearchParams();
  const boulder: Boulder = boulderData
    ? JSON.parse(boulderData as string)
    : null;

  // TODO mostrar mas info del bloque y estilar
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Boulder Details",
          headerLeft: () => null,
          headerRight: () => null, // Boton de share/like?
        }}
      />
      <View>
        {boulder.imgUrl && (
          <Image
            source={{ uri: boulder.imgUrl }}
            style={{ width: "100%", height: 300 }}
          />
        )}

        <View
          style={{
            padding: 20,
            flex: 1,
          }}
        >
          <View>
            {boulder?.tags?.map((tag: any) => (
              <View key={tag}>
                <Text>- {tag}</Text>
              </View>
            ))}
          </View>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
            {boulder.name}
          </Text>
          <Text>{boulder.grade}</Text>
          <Text>{boulder.description}</Text>
        </View>
        {/* TODO añadir LOG ASCENT, FRIEND, ASCENSIONS, LINK instagram/youtube */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
