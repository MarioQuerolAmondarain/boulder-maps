import RockTypeChip from "@/components/ui/RockTypeChip";
import { Area } from "@/types";
import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type AreaSelectModalProps = {
  visible: boolean;
  areas: Area[];
  selectedAreaId?: number;
  onSelect: (area: Area) => void;
  onClose: () => void;
};

export default function AreaSelectModal({
  visible,
  areas,
  selectedAreaId,
  onSelect,
  onClose,
}: AreaSelectModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalBackdrop} onPress={onClose} />
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Selecciona un area</Text>
        <ScrollView style={styles.modalList}>
          {areas.map((area) => {
            const isSelected = area.id === selectedAreaId;
            return (
              <TouchableOpacity
                key={area.id}
                style={[
                  styles.modalItem,
                  isSelected && styles.modalItemSelected,
                ]}
                onPress={() => onSelect(area)}
              >
                <View style={styles.modalItemHeader}>
                  <Text style={styles.modalItemTitle}>{area.name}</Text>
                  <RockTypeChip rockType={area.rockType} />
                </View>
                <Text style={styles.modalItemMeta}>
                  {area.province} · {area.boulders} bloques
                </Text>
              </TouchableOpacity>
            );
          })}
          <View style={styles.missingAreaContainer}>
            <Text>¿No encuentras tu zona de escalada?</Text>
            <Text>¡Contáctanos para añadirla!</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
          <Text style={styles.modalCloseText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  modalContainer: {
    marginHorizontal: 20,
    marginTop: "25%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  modalList: {
    maxHeight: 450,
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
  modalItemSelected: {
    borderColor: "#1a73e8",
    backgroundColor: "#e8f0fe",
  },
  modalItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  modalItemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  modalItemMeta: {
    marginTop: 6,
    fontSize: 14,
    color: "#555",
  },
  modalItemDescription: {
    marginTop: 6,
    fontSize: 13,
    color: "#666",
  },
  modalItemSelectedLabel: {
    marginTop: 8,
    fontSize: 12,
    color: "#1a73e8",
    fontWeight: "600",
  },
  modalCloseButton: {
    marginTop: 12,
    alignSelf: "flex-end",
  },
  modalCloseText: {
    color: "#1a73e8",
    fontSize: 16,
  },
  missingAreaContainer: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    opacity: 0.5,
  },
});
