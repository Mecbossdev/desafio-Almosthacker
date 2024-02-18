'use client'
import { ChakraProvider } from "@chakra-ui/react";

export interface IDefaultProvidersProps {
  children: React.ReactNode;
}

export default function DefaultProviders({children}: IDefaultProvidersProps) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}
