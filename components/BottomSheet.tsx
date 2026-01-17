import { useBoulder } from "@/providers/BoulderProvider";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect } from "react";
import { Text } from "react-native";

export default function SelectedBoulderSheet() {
  const { selectedBoulder } = useBoulder();
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  useEffect(() => {
    if (selectedBoulder) {
      bottomSheetRef.current?.expand();
    }
  }, [selectedBoulder]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={["50%"]}
      enablePanDownToClose
    >
      <BottomSheetView>
        {/* TODO refactorizar en un componente separado y dar estilo */}
        <Text>
          {selectedBoulder ? selectedBoulder.name : "No Boulder Selected"}
        </Text>
        <Text>{selectedBoulder ? selectedBoulder.description : ""}</Text>
        <Text>
          {selectedBoulder ? `Difficulty: ${selectedBoulder.grade}` : ""}
        </Text>
        {selectedBoulder.tags?.map((tag: any) => (
          <Text key={tag}>- {tag}</Text>
        ))}
      </BottomSheetView>
    </BottomSheet>
  );
}
