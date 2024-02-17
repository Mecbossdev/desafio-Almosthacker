'use client'
import Pagination from "@/components/pagination-component";
import { SelectedComponent } from "@/components/select-filter";
import TableList from "@/components/table-list";
import { users } from "@/data/fake-user";
import { Container, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [itensPerPages, setItensPerPages] = useState<number>(10);
  const [currentPages, setCurrentPages] = useState<number>(0);

  //total de itens por pag
  const pages = Math.ceil(users.length / itensPerPages);
  //
  const current = currentPages ?  (currentPages / pages) + 1 : 1
  const startIndex = currentPages * itensPerPages
  const endIndex = startIndex + itensPerPages
  const currentItens = users.slice(startIndex, endIndex)


  useEffect(() => {
    setCurrentPages(0)
  }, [itensPerPages])

  return (
    <Container padding='4' maxW='1200px' bg='gray.300' color='#262626' >
      <Flex justifyContent='space-between'>
        <Input 
          paddingRight='4'
        />
        <SelectedComponent 
          itensPerPages={itensPerPages}
          setItensPerPages={setItensPerPages}
        />
      </Flex>

      <TableList 
        currentItens={currentItens}
      />
      <Pagination
        disabled={currentPages === 1 ? true : false}
        currentPages={currentPages}
        pages={pages}
        setCurrentPages={setCurrentPages}  
      />
    </Container>
  );
}
