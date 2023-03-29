/* eslint-disable prettier/prettier */
import React from 'react';

export interface FormErrorProps {
  isValid: boolean;
  text: string;
}

export function FormError({ isValid, text }: FormErrorProps) {
  return <p className={isValid ? 'hide' : 'error errorMessage'}>{text}</p>;
}
