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
} from '@chakra-ui/react'

export interface ITableListProps {
  currentItens: usersProps[];
}

export default function TableList ({currentItens}: ITableListProps) {


  return (
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
  );
}
