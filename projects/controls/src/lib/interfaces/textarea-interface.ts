import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface ITextarea {
  appearance: MatFormFieldAppearance;
  cols?: number;
  id: string;
  label: string;
  maxlength?: number;
  name: string;
  placeholder?: string;
  required: boolean;
  rows?: number;
  wrap?: 'hard' | 'soft';
}

export function getDefaultTextarea(overrides?: Partial<ITextarea>): ITextarea {
  return Object.assign(
    {
      appearance: 'standard',
      cols: 20,
      id: null,
      label: null,
      maxlength: null,
      name: null,
      placeholder: null,
      required: false,
      rows: 2,
      wrap: 'hard',
    },
    overrides
  );
}
