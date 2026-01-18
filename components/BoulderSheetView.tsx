import { Boulder } from "@/types/Boulder";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InfoIcon } from "./Icons";

export default function BoulderSheetView(boulder: Boulder) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: boulder?.imgUrl || undefined }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {boulder?.name ? boulder.name : "No Boulder Selected"}
          </Text>
          <Text style={styles.grade}>{boulder?.grade}</Text>
        </View>
        <Text style={styles.description}>{boulder?.description}</Text>
        <View style={styles.tagsContainer}>
          {boulder?.tags?.map((tag: any) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <Link
          asChild
          href={{
            pathname: "/boulder/[id]/details",
            params: { id: boulder.id, boulderData: JSON.stringify(boulder) },
          }}
        >
          <TouchableOpacity style={styles.actionButton}>
            <InfoIcon size={24} color="black" />
            <Text style={styles.actionText}>Info</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.actionButton}>
          {/* TODO añadir a icons */}
          <Ionicons name="heart-outline" size={24} color="black" />
          <Text style={styles.actionText}>Me gusta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={24} color="black" />
          <Text style={styles.actionText}>Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 5,
    paddingBottom: 15,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
    marginRight: 8,
  },
  grade: {
    fontSize: 25,
    paddingRight: 10,
    fontWeight: "600",
    color: "#666",
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
    lineHeight: 15,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#dad5d5",
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  tagText: {
    color: "black",
    fontSize: 12,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "white",
  },
  actionButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 12,
    marginTop: 4,
    color: "#333",
  },
});
