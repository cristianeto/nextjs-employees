import React from 'react';
import { Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import employeeSchema from './employeeSchema';
import { ButtonGroup } from './form.styles';
import { TextField } from '@atoms';
import { employeeForm } from '@constants';
import { IForm } from '@interfaces';

const Form: React.FC<IForm> = ({
  initialState: state,
  onSubmit: submit,
  onClose,
  labels,
}) => {
  const { dni, name: firstname, lastname, email } = labels;
  const {
    titles: { saveRegister },
  } = employeeForm;

  const formik: any = useFormik({
    initialValues: state,
    onSubmit: (values) => {
      submit(values);
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
      <TextField {...register('dni')} label={dni} placeholder="DNI" />
      <TextField {...register('name')} label={firstname} placeholder="Name" />
      <TextField
        {...register('lastname')}
        label={lastname}
        placeholder="Lastname"
      />
      <TextField
        {...register('email')}
        label={email}
        placeholder="Email"
        type="email"
      />
      <ButtonGroup gap={4} width="100%">
        <Button colorScheme="blue" type="submit">
          {saveRegister}
        </Button>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default Form;
