import ImageModal from "@/components/modals/ImageModal";
import { HeartIcon, InfoIcon, ShareIcon } from "@/components/ui/Icons";
import { Boulder } from "@/types/Boulder";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BoulderSheetView(boulder: Boulder) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setIsImageOpen(true)}
      >
        <Image
          source={{ uri: boulder?.imgUrl || undefined }}
          style={styles.image}
        />
      </TouchableOpacity>
      <ImageModal
        isVisible={isImageOpen}
        imageUrl={boulder?.imgUrl}
        onClose={() => setIsImageOpen(false)}
      />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {boulder?.name ? boulder.name : "Ningún bloque seleccionado"}
          </Text>
          <Text style={styles.grade}>{boulder?.grade}</Text>
        </View>
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
          <TouchableOpacity style={styles.detailButton}>
            <InfoIcon size={29} color="black" />
            <Text style={styles.actionText}>Detalle</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            alert("🚧 ¡Estamos trabajando en ello! 🚧"); // TODO
          }}
        >
          <HeartIcon size={29} color={styles.secondaryActionText.color} />
          <Text style={[styles.actionText, styles.secondaryActionText]}>
            Favorito
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            alert("🚧 ¡Estamos trabajando en ello! 🚧"); // TODO
          }}
        >
          <ShareIcon size={29} color={styles.secondaryActionText.color} />
          <Text style={[styles.actionText, styles.secondaryActionText]}>
            Compartir
          </Text>
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
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 0,
  },
  actionButton: {
    borderColor: "#1f6feb",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailButton: {
    borderColor: "#9cc4ff",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9cc4ff",
  },
  actionText: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 6,
  },
  secondaryActionText: {
    color: "#1f6feb",
  },
});
