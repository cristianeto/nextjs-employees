import React from 'react';
import { useFormik } from 'formik';
import employeeSchema from './employeeSchema';
import { TextField } from '@atoms';
import { IForm } from '@interfaces';

const Form: React.FC<IForm> = ({
  defaultFormState: state,
  onSubmitt,
  labels,
}) => {
  const { dni, name: firstname, lastname } = labels;
  const formik: any = useFormik({
    initialValues: {
      id: state.id,
      dni: state.dni,
      name: state.name,
      lastname: state.lastname,
      email: state.email,
    },
    onSubmit: onSubmitt,
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
    </form>
  );
};

export default Form;
