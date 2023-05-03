import { upperCaseFirstLetter } from './upperCaseFirstLetter';

export const validateFirstLetter = (text: string): boolean =>
  text ? text[0] === upperCaseFirstLetter(text[0]) : false;

export const validateEmpty = (text: string): boolean => !!text;

export const validateChecked = (bool: boolean[]): boolean =>
  bool.some((el: boolean) => el === true);
