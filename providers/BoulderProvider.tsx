import { createContext, PropsWithChildren, useContext, useState } from "react";

const BoulderContext = createContext({});

export default function BoulderProvider({ children }: PropsWithChildren) {
  const [selectedBoulder, setSelectedBoulder] = useState();

  console.log("Selected:", selectedBoulder);

  return (
    <BoulderContext.Provider value={{ selectedBoulder, setSelectedBoulder }}>
      {children}
    </BoulderContext.Provider>
  );
}

export const useBoulder = () => useContext(BoulderContext);
