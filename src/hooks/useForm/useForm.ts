import React, { useState } from 'react';

const useForm = <T>(
  initialState: T,
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [formValues, setFormValues] = useState<T>(initialState);

  const reset = (): void => {
    setFormValues(initialState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return [formValues, handleChange, reset];
};

export default useForm;
