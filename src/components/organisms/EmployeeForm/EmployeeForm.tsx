import React from 'react';
import Form from './Form';
import { employeeForm as formTexts } from '@constants';
import { IEmployeeForm } from '@interfaces';
import { Modal } from '@molecules';
import { useAppSelector } from 'src/redux/hooks';

const EmployeeForm: React.FC<IEmployeeForm> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const { newEmployee } = useAppSelector((state) => state.employees);

  const { labels, titles } = formTexts;
  const formProps = {
    defaultFormState: newEmployee,
    onSubmit,
    labels,
    titles,
  };

  return (
    <Modal
      isOpen={isOpen}
      mainButtonText="Save"
      title="Create Employee"
      onClose={onClose}>
      <Form {...formProps} />
    </Modal>
  );
};

export default EmployeeForm;
