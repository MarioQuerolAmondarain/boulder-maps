import { Boulder } from "@/types/Boulder";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoulderDetails() {
  const { boulderData } = useLocalSearchParams();
  const boulder: Boulder = boulderData
    ? JSON.parse(boulderData as string)
    : null;

  // TODO mostrar mas info del bloque y estilar
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {boulder.imgUrl && (
          <Image
            source={{ uri: boulder.imgUrl }}
            style={{ width: "100%", height: 300 }}
          />
        )}

        <View style={styles.content}>
          <View>
            {boulder?.tags?.map((tag: any) => (
              <View key={tag}>
                <Text>- {tag}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.title}>{boulder.name}</Text>
          <Text>{boulder.grade}</Text>
          <Text>{boulder.description}</Text>
        </View>
        {/* TODO añadir LOG ASCENT, FRIEND, ASCENSIONS, LINK instagram/youtube */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});
