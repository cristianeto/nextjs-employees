import React from 'react';
import { Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import employeeSchema from './employeeSchema';
import { ButtonGroup } from './form.styles';
import { TextField } from '@atoms';
import { employeeForm } from '@constants';
import { IEmployee, IForm } from '@interfaces';

const Form: React.FC<IForm> = ({
  defaultFormState: state,
  onSubmit,
  labels,
}) => {
  const { dni, name: firstname, lastname, email } = labels;
  const {
    titles: { saveRegister },
  } = employeeForm;

  const saveForm = (values: IEmployee) => {
    onSubmit(values);
  };

  const formik: any = useFormik({
    initialValues: state,
    onSubmit: (values) => {
      saveForm(values);
    },
    validationSchema: employeeSchema,
  });

  const register = (name: string) => ({
    isError: formik.errors[name] && formik.touched[name],
    helperText: formik.errors[name],
    name,
    onChange: formik.handleChange,
    value: formik.values[name],
    onBlur: formik.handleBlur,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField {...register('dni')} label={dni} placeholder="dni" />
      <TextField {...register('name')} label={firstname} placeholder="name" />
      <TextField {...register('lastname')} label={lastname} />
      <TextField {...register('email')} label={email} type="email" />
      <ButtonGroup gap={4} width="100%">
        <Button colorScheme="blue" type="submit">
          {saveRegister}
        </Button>
        <Button variant="outline">Cancel</Button>
      </ButtonGroup>
    </form>
  );
};

export default Form;
