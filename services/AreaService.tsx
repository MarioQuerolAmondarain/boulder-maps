import { AREA_DETAILS } from "@/data/areas";
import { AreaDetails } from "@/types/AreaDetails";

export const getAreaDetails = (name: string): AreaDetails => {
  return AREA_DETAILS.find((area) => area.name === name)!;
};
