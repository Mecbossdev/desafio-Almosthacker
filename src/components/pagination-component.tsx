import { Button } from '@chakra-ui/react';

export interface IPagintationProps {
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
  pages: any;
}

export default function Pagintation({pages, setCurrentPages}:  IPagintationProps) {
  return (
    <div>
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
