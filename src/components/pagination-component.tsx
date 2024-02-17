import { Button } from '@chakra-ui/react';

export interface IPaginationProps {
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
  pages: any;
  currentPages: number;
  disabled?: boolean;
}

export default function Pagination({pages, setCurrentPages, disabled, currentPages }:  IPaginationProps) {
  return (
    <div>
      <button
        onClick={(e) => setCurrentPages(currentPages - 1)}
        disabled={disabled}
      >
        Anterior
      </button>
      {Array.from(Array(pages), (item, index) => {
        return (
          <>
            <Button 
              value={index}
              onClick={(e) => setCurrentPages(Number((e.target as any).value))}
            >
              {index + 1}
            </Button>
            
          </>
        )
      })}
    </div>
  );
}
