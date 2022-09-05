import { ToastProps } from '@chakra-ui/react';

export default function createMockToast(
  toast: Partial<ToastProps>,
): ToastProps {
  return {
    title: 'This is a title',
    description: 'This is a description',
    status: 'success',
    ...toast,
  };
}
