import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { ITextField } from '@interfaces';

const TextField: React.FC<ITextField> = ({
  label,
  name,
  isError,
  helperText,
  type = 'text',
  ...props
}) => {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} {...props} name={name} />
      {isError ? <FormErrorMessage>{helperText}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default TextField;
