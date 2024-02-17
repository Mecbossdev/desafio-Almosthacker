import { users, usersProps } from '@/data/fake-user';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from '@chakra-ui/react'

export interface ITableListProps {
  currentItens: usersProps[];
}

export default function TableList ({currentItens}: ITableListProps) {


  return (
    <Container padding='4' maxW='1200px' bg='gray.300' color='#262626' >
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Páginas do Usuários</TableCaption>
          <Thead>
            <Tr>
              <Th>Usuários</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItens.map((data) => (
              <Tr key={data.id}>
                <Td>{data.user}</Td>
              </Tr>            
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>

  );
}
