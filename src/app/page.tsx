'use client'
import TableList from "@/components/table-list";
import { users } from "@/data/fake-user";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [itensPerPages, setItensPerPages] = useState<number>(10);
  const [currentPages, setCurrentPages] = useState<number>(0);

  const pages = Math.ceil(users.length / itensPerPages);
  const startIndex = currentPages * itensPerPages
  const endIndex = startIndex + itensPerPages
  const currentItens = users.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPages(0)
  }, [itensPerPages])

  return (
    <Container>
      <TableList 
        currentItens={currentItens}
      />
    </Container>
  );
}
