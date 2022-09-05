import { useToast } from '@chakra-ui/react';

const useCustomToast = () => {
  const toast = useToast();

  const instance = (
    title: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'success',
    position:
      | 'top'
      | 'top-right'
      | 'top-left'
      | 'bottom'
      | 'bottom-right'
      | 'bottom-left' = 'bottom-left',
  ) => {
    toast({
      title,
      status: type,
      position,
      isClosable: true,
    });
  };

  return { instance };
};

export default useCustomToast;
