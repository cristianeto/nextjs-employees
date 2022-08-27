import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { useForm } from '@hooks';
import { dataCredentials as initialValues } from '@mocks';

describe('useForm Hook ', () => {
  it('should return initial form values', () => {
    const { result } = renderHook(() => useForm(initialValues));
    expect(result.current).toBeDefined();
    expect(result.current[0]).toEqual(initialValues);
  });

  it('should change email value when typing', () => {
    const { result } = renderHook(() => useForm(initialValues));
    expect(result.current).toBeDefined();
    expect(result.current[0].email).toEqual(initialValues.email);

    const event = new Event('change');
    Object.defineProperty(event, 'target', {
      value: {
        name: 'email',
        value: 'test@example.com',
      },
      writable: false,
    });
    // ? Executing the handleChange function
    act(() => {
      result.current[1](
        event as unknown as React.ChangeEvent<HTMLInputElement>,
      );
    });
    expect(result.current[0].email).toEqual('test@example.com');
  });

  it('should change password value when typing', () => {
    const { result } = renderHook(() => useForm(initialValues));
    expect(result.current).toBeDefined();
    expect(result.current[0].email).toEqual(initialValues.email);

    const event = new Event('change');
    Object.defineProperty(event, 'target', {
      value: {
        name: 'password',
        value: 'passwordddd',
      },
      writable: false,
    });
    // ? Executing the handleChange function
    act(() => {
      result.current[1](
        event as unknown as React.ChangeEvent<HTMLInputElement>,
      );
    });
    expect(result.current[0].password).toEqual('passwordddd');
  });

  it('should reset the initialValues', () => {
    const { result } = renderHook(() => useForm(initialValues));
    expect(result.current).toBeDefined();
    expect(result.current[0].email).toEqual(initialValues.email);

    const event = new Event('change');
    Object.defineProperty(event, 'target', {
      value: {
        name: 'password',
        value: 'passwordddd',
      },
      writable: false,
    });
    act(() => {
      result.current[1](
        event as unknown as React.ChangeEvent<HTMLInputElement>,
      );
    });
    expect(result.current[0].password).toEqual('passwordddd');

    // ? Executing the reset function
    act(() => {
      result.current[2]();
    });
    expect(result.current[0]).toEqual(initialValues);
  });
});
