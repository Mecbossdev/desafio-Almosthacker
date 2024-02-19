import { Button, SystemStyleObject } from '@chakra-ui/react';

export interface IPaginationProps {
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  active?: boolean;
}

export default function Pagination({pages, setCurrentPages, active}:  IPaginationProps) {
  return (
    <>
      {Array.from(Array(pages), (item, index) => {
        return (
          <>
            <Button 
              value={index}
              onClick={(e) => setCurrentPages(Number((e.target as any).value))}
              isActive={active}
            >
              {index + 1}
            </Button>
          </>
        )
      })}
    </>
  );
}
