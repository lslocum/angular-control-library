import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface ITime {
  appearance: MatFormFieldAppearance;
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required: boolean;
}

export function getDefaultTime(overrides?: Partial<ITime>): ITime {
  return Object.assign(
    {
      appearance: 'standard',
      id: null,
      label: null,
      name: null,
      placeholder: null,
      required: false,
    },
    overrides
  );
}
