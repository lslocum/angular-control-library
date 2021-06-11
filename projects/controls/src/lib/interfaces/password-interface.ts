import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface IPassword {
  appearance: MatFormFieldAppearance;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  passwordRequirements?: IPasswordRequirements;
}

export interface IPasswordRequirements {
  minlength: number;
  maxlength: number;
  requireLowerCase: boolean;
  requireUpperCase: boolean;
  requireNumbers: boolean;
  requireSpecialCharacters: boolean;
}

export function getDefaultPassword(overrides?: Partial<IPassword>): IPassword {
  return Object.assign(
    {
      appearance: null,
      id: null,
      label: null,
      name: null,
      placeholder: null,
      required: false,
      passwordRequirements: {
        minlength: null,
        maxlength: null,
        requireLowerCase: false,
        requireUpperCase: false,
        requireNumbers: false,
        requireSpecialCharacters: false,
      },
    },
    overrides
  );
}
