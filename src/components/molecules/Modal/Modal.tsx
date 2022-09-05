import React from 'react';
import {
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { IModal } from '@interfaces';
import { capitalizeFirstLetter } from 'src/utils/helpers';

const Modal: React.FC<IModal> = ({ children, title, isOpen, onClose }) => {
  const initialRef = React.useRef(null);

  return (
    <ModalChakra initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{capitalizeFirstLetter(title)}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;
