'use client'

import { users } from '@/data/fake-user';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useState } from 'react';

export interface ITableListProps {
}

export default function TableList (props: ITableListProps) {


  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Usuarios</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((data) => (
            <Tr key={data.id}>
              <Td>{data.user}</Td>
            </Tr>            
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
