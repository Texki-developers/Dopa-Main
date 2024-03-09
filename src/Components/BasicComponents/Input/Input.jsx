import React from 'react';
import VStack from '../VStack/VStack';
import { slugify } from '../../../utils/slugify/slugify';

export default function Input({
  children,
  label,
  className,
  error,
  register,
  required,
errorClass,
  ...otherProps
}) {
  return (
    <VStack >
      <label
        htmlFor={slugify(label)}
        className={`text-basic ${required && 'after:content-["*"]'}`}
      >
        {label}
      </label>
      <input
        className={`input-common ${className}`}
        {...register}
        id={slugify(label)}
        {...otherProps}
      />
      {error && error != '' && (
        <p className={`text-[0.88rem]  ${errorClass ? errorClass : 'text-red-600'}`}>{error}</p>
      )}
    </VStack>
  );
}
