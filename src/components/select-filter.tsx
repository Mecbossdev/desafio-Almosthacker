import { Select } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export interface ISelectedComponentProps {
  itensPerPages: number;
  setItensPerPages: Dispatch<SetStateAction<number>>;
  bgColor: string;
  width?: string;
}

export function SelectedComponent ({itensPerPages, setItensPerPages, bgColor, width}: ISelectedComponentProps) {
  return (
    <>
      <Select 
        value={itensPerPages}
        onChange={(e) => setItensPerPages(Number(e.target.value))}
        bgColor={bgColor}
        maxW={width}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </Select>
    </>
  );
}
