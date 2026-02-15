import BoulderSheetView from "@/components/sheets/BoulderSheetView";
import { useBoulder } from "@/providers/BoulderProvider";
import { Boulder } from "@/types/Boulder";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useEffect } from "react";

export default function SelectedBoulderSheet() {
  const { selectedBoulder, setSelectedBoulder } = useBoulder() as any;
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  useEffect(() => {
    if (selectedBoulder) {
      bottomSheetRef.current?.expand();
    }
  }, [selectedBoulder]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      onClose={() => setSelectedBoulder(null)}
    >
      <BottomSheetView>
        <BoulderSheetView {...(selectedBoulder as Boulder)} />
      </BottomSheetView>
    </BottomSheet>
  );
}
