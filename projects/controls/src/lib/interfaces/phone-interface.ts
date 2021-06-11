import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface IPhone {
  appearance: MatFormFieldAppearance;
  id: string;
  label: string;
  maxlength?: number;
  minlength?: number;
  name: string;
  pattern?: string;
  placeholder?: string;
  required: boolean;
}

export function getDefaultPhone(overrides?: Partial<IPhone>): IPhone {
  return Object.assign(
    {
      appearance: null,
      id: null,
      label: null,
      maxlength: 12,
      minlength: 10,
      name: null,
      pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
      placeholder: '',
      required: false,
    },
    overrides
  );
}
