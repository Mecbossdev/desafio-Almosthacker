import { Select } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export interface ISelectedComponentProps {
  itensPerPages: number;
  setItensPerPages: Dispatch<SetStateAction<number>>;
}

export function SelectedComponent ({itensPerPages, setItensPerPages}: ISelectedComponentProps) {
  return (
    <div>
      <Select 
        value={itensPerPages}
        onChange={(e) => setItensPerPages(Number(e.target.value))}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
      </Select>
    </div>
  );
}
