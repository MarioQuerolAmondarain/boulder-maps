import { useBoulder } from "@/providers/BoulderProvider";
import { Boulder } from "@/types/Boulder";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect } from "react";
import BoulderSheetView from "./BoulderSheetView";

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
        <BoulderSheetView {...(selectedBoulder as Boulder)} />
      </BottomSheetView>
    </BottomSheet>
  );
}
