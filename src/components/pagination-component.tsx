import { Button } from '@chakra-ui/react';

export interface IPaginationProps {
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  isActive: boolean;
  currentPages: number;
}

export default function Pagination({pages, setCurrentPages, currentPages}:  IPaginationProps) {
  return (
    <>
      {Array.from(Array(pages), (item, index) => {
        return (
          <>
            <Button
              isActive={currentPages === index} 
              value={index}
              onClick={(e) => setCurrentPages(Number((e.target as HTMLButtonElement).value))}
            >
              {index + 1}
            </Button>
          </>
        )
      })}
    </>
  );
}
