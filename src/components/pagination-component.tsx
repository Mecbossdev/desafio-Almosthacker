import { Button } from '@chakra-ui/react';

export interface IPaginationProps {
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
}

export default function Pagination({pages, setCurrentPages}:  IPaginationProps) {
  return (
    <>
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
    </>
  );
}
