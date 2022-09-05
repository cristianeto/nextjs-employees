import * as yup from 'yup';

const employeeSchema = yup.object().shape({
  id: yup.string(),
  dni: yup
    .string()
    .length(10, 'DNI must have 10 characters long')
    .required('DNI is required'),
  name: yup.string().required('Name is required'),
  lastname: yup.string().required('Lastname is required'),
  email: yup.string().email().required('Email is required'),
  type: yup.string(),
});

export default employeeSchema;
