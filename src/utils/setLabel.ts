import { upperCaseFirstLetter } from './upperCaseFirstLetter';

export const setLabel = (text: string, required?: boolean) =>
  `${upperCaseFirstLetter(text)}:${required ? '*' : ''}`;
