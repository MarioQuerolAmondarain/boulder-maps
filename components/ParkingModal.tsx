import React from "react";
import {
  Alert,
  Linking,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ParkingModalProps = {
  visible: boolean;
  onClose: () => void;
  latitude: number;
  longitude: number;
  name?: string;
};

// TODO Revisar y refactorizar si fuera necesario
export default function ParkingModal({
  visible,
  onClose,
  latitude,
  longitude,
  name,
}: ParkingModalProps) {
  const openInMaps = async () => {
    const label = name || "Parking";
    const url = Platform.select({
      ios: `maps:0,0?q=${label}@${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}(${label})`,
    });

    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        onClose();
      } else {
        Alert.alert("Error", "No se puede abrir la aplicación de mapas");
      }
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modal}>
          <Text style={styles.title}>{name || "Parking"}</Text>
          <Text style={styles.coordinates}>
            {latitude.toFixed(6)}, {longitude.toFixed(6)}
          </Text>

          <Pressable style={styles.button} onPress={openInMaps}>
            <Text style={styles.buttonText}>Abrir en Mapas</Text>
          </Pressable>

          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    width: "80%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#1a3a52",
  },
  coordinates: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3b82f6",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  cancelButton: {
    padding: 12,
  },
  cancelText: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
});
