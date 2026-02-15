import ImageModal from "@/components/modals/ImageModal";
import GoBackButton from "@/components/ui/GoBackButton";
import HorizontalButton, {
  ACTION_BUTTON_COLOR,
} from "@/components/ui/HorizontalButton";
import HorizontalButtonContainer from "@/components/ui/HorizontalButtonContainer";
import {
  CheckIcon,
  HeartIcon,
  ShareIcon,
  VideoIcon,
} from "@/components/ui/Icons";
import { Boulder } from "@/types/Boulder";
import { useLocalSearchParams } from "expo-router";

import { useState } from "react";
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
  const [isImageOpen, setIsImageOpen] = useState(false);

  const boulder: Boulder = boulderData
    ? JSON.parse(boulderData as string)
    : null;
  const imageUrl = boulder?.imgUrl;
  const tags = boulder?.tags ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <GoBackButton />
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

        <HorizontalButtonContainer
          style={{ paddingBottom: 20, paddingTop: 20 }}
        >
          <HorizontalButton
            icon={<CheckIcon size={29} color={ACTION_BUTTON_COLOR} />}
            label="Encadenado"
            onPress={null} // TODO
          />
          <HorizontalButton
            icon={<VideoIcon size={29} color={ACTION_BUTTON_COLOR} />}
            label="Ver videos"
            onPress={null} // TODO
          />
          <HorizontalButton
            icon={<HeartIcon size={29} color={ACTION_BUTTON_COLOR} />}
            onPress={null} // TODO
          />
          <HorizontalButton
            icon={<ShareIcon size={29} color={ACTION_BUTTON_COLOR} />}
            onPress={null} // TODO
          />
        </HorizontalButtonContainer>
      </ScrollView>
    </SafeAreaView>
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
});
