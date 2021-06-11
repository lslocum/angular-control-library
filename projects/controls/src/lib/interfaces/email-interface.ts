import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface IEmail {
  appearance?: MatFormFieldAppearance;
  icon?: string;
  id: string;
  label: string;
  maxlength?: number;
  minlength?: number;
  name: string;
  placeholder: string;
  required: boolean;
}

export function getDefaultEmail(overrides?: Partial<IEmail>): IEmail {
  return Object.assign(
    {
      id: null,
      label: null,
      maxlength: null,
      minlength: 7,
      name: null,
      placeholder: '',
      required: false,
    },
    overrides
  );
}
