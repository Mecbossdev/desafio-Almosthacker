'use client'
import { InputComponent } from "@/components/input-component";
import Pagination from "@/components/pagination-component";
import { SelectedComponent } from "@/components/select-filter";
import TableList from "@/components/table-list";
import { users } from "@/data/fake-user";
import { Alert, AlertIcon, AlertTitle, Button, Container, Flex } from "@chakra-ui/react";
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
      p='4' 
      maxW='800px' 
      bg='gray.300' 
      bgColor='#D0D5DD' 
      margin='auto' 
      boxShadow='xl'  
      rounded='xl'
    >
      <Flex justifyContent='space-between'>
        <InputComponent
          type="text" 
          value={search}
          onChange={handleChange}
          bgColor='#EDF2F7'
          width='max-content'
          placeholder="Buscar usuários.."
        />
        <SelectedComponent
          width="max-content"
          bgColor="#EDF2F7"
          itensPerPages={itensPerPages}
          setItensPerPages={setItensPerPages}
        />
      </Flex>

      {filteredPosts.length === 0 && (
        <Alert status='error' mt='20px'>
          <AlertIcon />
          <AlertTitle>Não existe usuário com esse nome!</AlertTitle>
        </Alert>
      )}

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
