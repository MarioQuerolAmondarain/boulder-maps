import { ReactNode } from "react";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";

type HorizontalButtonContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function HorizontalButtonContainer({
  children,
  style,
}: HorizontalButtonContainerProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.buttonsContainer, style]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 5,
  },
});
