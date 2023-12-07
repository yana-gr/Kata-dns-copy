import React from 'react';
import styles from './Input.module.css';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  names: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
}

const Input: React.FC<InputProps> = ({ type, placeholder, names, register, errors }) => {
  const hasError = errors && errors[names];

  return (
    <>
      <input
        {...register(names)}
        className={`${styles.input} ${hasError ? styles.errorInput : ''}`}
        name={names}
        type={type}
        placeholder={placeholder}
      />
      {hasError && <p className={styles.errorMessage}>{(errors[names] as FieldValues)?.message}</p>}
    </>
  );
};

export { Input };
