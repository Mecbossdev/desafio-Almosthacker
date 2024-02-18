'use client'
import Pagination from "@/components/pagination-component";
import { SelectedComponent } from "@/components/select-filter";
import TableList from "@/components/table-list";
import { users } from "@/data/fake-user";
import { Button, Container, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [itensPerPages, setItensPerPages] = useState<number>(10);
  const [currentPages, setCurrentPages] = useState<number>(0);
  const [search, setSearchValue] = useState<string>('')

  const pages = Math.ceil(users.length / itensPerPages);
  const startIndex = currentPages * itensPerPages
  const endIndex = startIndex + itensPerPages
  const currentItens = users.slice(startIndex, endIndex)

  const filteredPosts = search ?
  currentItens.filter(item => {
    return item.user.toLowerCase().includes(
      search.toLowerCase()
    );
  })
  : currentItens;

  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
  }

  useEffect(() => {
    setCurrentPages(0)
  }, [itensPerPages])

  return (
    <Container 
      padding='4' 
      maxW='800px' 
      bg='gray.300' 
      color='#262626' 
      margin='auto' 
      borderRadius='20px'
    >
      <Flex justifyContent='space-between'>
        <Input 
          value={search}
          paddingRight='4'
          onChange={handleChange}
          bgColor='white'
          width='max-content'
          placeholder="Buscar usuários.."
        />
        <SelectedComponent 
          itensPerPages={itensPerPages}
          setItensPerPages={setItensPerPages}
        />
      </Flex>

      <TableList 
        currentItens={filteredPosts}
      />
      <Flex justifyContent='center'>
        <Button
          onClick={(e) => setCurrentPages(currentPages - 1)}
          isDisabled={currentPages === 0}
        >
          Anterior
        </Button>
        <Pagination
          pages={pages}
          setCurrentPages={setCurrentPages}  
        />
        <Button
          onClick={(e) => setCurrentPages(currentPages + 1)}
          isDisabled={currentPages === pages - 1}
        >
          Próximo
        </Button>
      </Flex>

    </Container>
  );
}
