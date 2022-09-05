import React from 'react';
import Form from './Form';
import { employeeForm as formTexts } from '@constants';
import { IEmployeeForm } from '@interfaces';
import { Modal } from '@molecules';
import { useAppSelector } from 'src/redux/hooks';

const EmployeeForm: React.FC<IEmployeeForm> = ({
  isOpen,
  formType,
  onClose,
  onSubmit,
}) => {
  const { employee: initialState } = useAppSelector((state) => state.employees);
  const { labels, titles } = formTexts;

  const formProps = {
    initialState,
    onClose,
    onSubmit,
    labels,
    titles,
  };

  const { create, updateRegister, saveRegister } = titles;

  return (
    <Modal
      isOpen={isOpen}
      mainButtonText={saveRegister}
      title={formType === create ? create : updateRegister}
      onClose={onClose}>
      <Form {...formProps} />
    </Modal>
  );
};

export default EmployeeForm;
