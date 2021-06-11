import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface INumber {
  appearance: MatFormFieldAppearance;
  id: string;
  label: string;
  max?: number;
  min?: number;
  name: string;
  placeholder?: string;
  required: boolean;
  step?: number;
}

export function getDefaultNumber(overrides?: Partial<INumber>): INumber {
  return Object.assign(
    {
      appearance: null,
      id: null,
      label: null,
      max: null,
      min: null,
      name: null,
      placeholder: null,
      required: false,
      step: null,
    },
    overrides
  );
}
