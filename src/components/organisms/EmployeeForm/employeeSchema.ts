import * as yup from 'yup';

const employeeSchema = yup.object().shape({
  id: yup.string(),
  dni: yup.string().min(10).max(10).required('Required'),
  name: yup.string().required('Required'),
  lastname: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  type: yup.string(),
});

export default employeeSchema;
