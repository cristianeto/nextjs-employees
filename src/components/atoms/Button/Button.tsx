import React from 'react';
import { Button } from '@chakra-ui/react';
import { IButton } from '@interfaces';

const Buttton: React.FC<IButton> = ({
  children,
  colorScheme = 'blue',
  variant = 'solid',
  ...props
}) => {
  return (
    <Button colorScheme={colorScheme} variant={variant} {...props}>
      {children}
    </Button>
  );
};

export default Buttton;
