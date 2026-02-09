import BoulderSheetView from "@/components/sheets/BoulderSheetView";
import { useBoulder } from "@/providers/BoulderProvider";
import { Boulder } from "@/types/Boulder";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect } from "react";

export default function SelectedBoulderSheet() {
  const { selectedBoulder, setSelectedBoulder } = useBoulder() as any;
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
      snapPoints={["65%"]}
      enablePanDownToClose
      handleStyle={{ display: "none" }}
      onClose={() => setSelectedBoulder(null)}
    >
      <BottomSheetView>
        <BoulderSheetView {...(selectedBoulder as Boulder)} />
      </BottomSheetView>
    </BottomSheet>
  );
}
