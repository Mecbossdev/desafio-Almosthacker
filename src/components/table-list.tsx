import { usersProps } from '@/data/fake-user';
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
    <TableContainer mt='20px'>
      <Table size='sm'>
        <TableCaption fontSize='md'>Páginas do Usuários</TableCaption>
        <Thead>
          <Tr>
            <Th fontSize='md'>Usuários</Th>
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
