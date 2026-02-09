import { HeartIcon, InfoIcon, ShareIcon } from "@/components/ui/Icons";
import { Boulder } from "@/types/Boulder";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
            {boulder?.name ? boulder.name : "Ningún bloque seleccionado"}
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

      <View style={styles.buttonsContainer}>
        <Link
          asChild
          href={{
            pathname: "/boulder/[id]/details",
            params: { id: boulder.id, boulderData: JSON.stringify(boulder) },
          }}
        >
          <TouchableOpacity style={styles.actionButton}>
            <InfoIcon size={29} color="black" />
            <Text style={styles.actionText}>Detalles</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            alert("¡Estamos trabajando en ello! 🚧"); // TODO
          }}
        >
          <HeartIcon size={29} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            alert("We are working on it! 🚧"); // TODO
          }}
        >
          <ShareIcon size={29} color="black" />
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 25,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "white",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 6,
  },
});
