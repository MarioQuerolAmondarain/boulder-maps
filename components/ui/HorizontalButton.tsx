import { ReactNode, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ACTION_BUTTON_COLOR = "#1f6feb";

type HorizontalButtonProps = {
  icon: ReactNode;
  label?: string;
  onPress: (() => void) | null;
  variant?: "outlined" | "filled";
};

export default function HorizontalButton({
  icon,
  label,
  onPress,
  variant = "outlined",
}: HorizontalButtonProps) {
  const workInProgress = useCallback(() => {
    alert("🚧 ¡Estamos trabajando en ello! 🚧");
  }, []);

  return (
    <TouchableOpacity
      style={[styles.actionButton, variant === "filled" && styles.filledButton]}
      onPress={onPress ?? workInProgress}
    >
      {icon}
      {label ? (
        <Text
          style={[styles.actionText, variant === "filled" && styles.filledText]}
        >
          {label}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    borderColor: ACTION_BUTTON_COLOR,
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
    color: ACTION_BUTTON_COLOR,
    marginLeft: 6,
  },
  filledButton: {
    backgroundColor: "#9cc4ff",
    borderColor: "transparent",
  },
  filledText: {
    color: "#000000",
  },
});
