import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface ITextbox {
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

export function getDefaultTextbox(overrides?: Partial<ITextbox>): ITextbox {
  return Object.assign(
    {
      appearance: 'standard',
      id: null,
      label: null,
      maxlength: null,
      minlength: null,
      name: null,
      pattern: null,
      placeholder: null,
      required: false,
    },
    overrides
  );
}
