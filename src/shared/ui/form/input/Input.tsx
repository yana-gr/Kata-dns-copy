import React from 'react';
import styles from './Input.module.css';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  names: string;
  register: UseFormRegister<Record<string, unknown>>;
}

const Input: React.FC<InputProps> = ({ type, placeholder, names, register }) => {
  return (
    <>
      <input {...register(names)} className={styles.input} name={names} type={type} placeholder={placeholder}/>
    </>
  );
};

export { Input };
