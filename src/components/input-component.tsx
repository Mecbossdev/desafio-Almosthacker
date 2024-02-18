import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import { ChangeEventHandler } from 'react';

export interface IInputComponentProps {
  type: string;
  placeholder: string;
  value?: string;
  bgColor?: string;
  width?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function InputComponent({value, placeholder, type, bgColor, width, onChange}: IInputComponentProps) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='gray.500' />
      </InputLeftElement>
      <Input 
        type={type}
        value={value} 
        placeholder={placeholder}
        bgColor={bgColor}
        width={width}
        onChange={onChange}
      />
    </InputGroup>
  );
}
