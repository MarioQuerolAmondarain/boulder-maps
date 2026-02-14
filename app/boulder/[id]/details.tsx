import ImageModal from "@/components/modals/ImageModal";
import {
  CheckIcon,
  HeartIcon,
  ShareIcon,
  VideoIcon,
} from "@/components/ui/Icons";
import { Boulder } from "@/types/Boulder";
import { useLocalSearchParams } from "expo-router";
import { ReactNode, useCallback, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BoulderDetails() {
  const { boulderData } = useLocalSearchParams();
  const boulder: Boulder = boulderData
    ? JSON.parse(boulderData as string)
    : null;
  const [isImageOpen, setIsImageOpen] = useState(false);
  const imageUrl = boulder?.imgUrl;
  const tags = boulder?.tags ?? [];
  const handlePlaceholderAction = useCallback(() => {
    alert("🚧 ¡Estamos trabajando en ello! 🚧");
  }, []);

  // TODO Aniadir boton de volver atras
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {imageUrl && (
          <View style={styles.heroWrap}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setIsImageOpen(true)}
            >
              <Image source={{ uri: imageUrl }} style={styles.heroImage} />
            </TouchableOpacity>
            <ImageModal
              isVisible={isImageOpen}
              imageUrl={imageUrl}
              onClose={() => setIsImageOpen(false)}
            />
          </View>
        )}

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{boulder?.name}</Text>
            <Text style={styles.grade}>{boulder?.grade}</Text>
          </View>

          <Text style={styles.description}>{boulder?.description}</Text>

          <View style={styles.tagRow}>
            {tags.map((tag: string) => (
              <TagChip key={tag} label={tag} />
            ))}
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <ActionButton
            icon={
              <CheckIcon size={29} color={styles.secondaryActionText.color} />
            }
            label="Encadenado"
            onPress={handlePlaceholderAction}
          />
          <ActionButton
            icon={
              <VideoIcon size={29} color={styles.secondaryActionText.color} />
            }
            label="Ver videos"
            onPress={handlePlaceholderAction}
          />
          <ActionButton
            icon={
              <HeartIcon size={29} color={styles.secondaryActionText.color} />
            }
            onPress={handlePlaceholderAction}
          />
          <ActionButton
            icon={
              <ShareIcon size={29} color={styles.secondaryActionText.color} />
            }
            onPress={handlePlaceholderAction}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type ActionButtonProps = {
  icon: ReactNode;
  label?: string;
  onPress: () => void;
};

function ActionButton({ icon, label, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      {icon}
      {label ? (
        <Text style={[styles.actionText, styles.secondaryActionText]}>
          {label}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}

type TagChipProps = {
  label: string;
};

function TagChip({ label }: TagChipProps) {
  return (
    <View style={styles.tagChip}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  heroWrap: {
    backgroundColor: "#f5f5f5",
  },
  heroImage: {
    width: "100%",
    height: 300,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 12,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 10,
  },
  tagRow: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  title: {
    color: "#050607",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 4,
  },
  grade: {
    color: "#666",
    fontSize: 25,
    paddingRight: 10,
    fontWeight: "600",
  },
  description: {
    color: "#000000",
    fontSize: 15,
    lineHeight: 22,
  },
  tagChip: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: "#333",
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 35,
    gap: 5,
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
  actionText: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 6,
  },
  secondaryActionText: {
    color: "#1f6feb",
  },
});
