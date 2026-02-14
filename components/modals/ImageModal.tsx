import { Image, Modal, Pressable, StyleSheet } from "react-native";

type ImageZoomModalProps = {
  isVisible: boolean;
  imageUrl?: string | null;
  onClose: () => void;
};

// TODO Mostrar ruta y que se pueda hacer zoom, tambien anadir un boton para volver atras
export default function ImageModal({
  isVisible,
  imageUrl,
  onClose,
}: ImageZoomModalProps) {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Image
          source={{ uri: imageUrl || undefined }}
          style={styles.image}
          resizeMode="contain"
        />
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
