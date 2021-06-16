import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface ISelect {
  appearance?: MatFormFieldAppearance;
  errorStateMatcher?: ErrorStateMatcher;
  id: string;
  label: string;
  name: string;
  nameProperty: string;
  options: any[];
  panelClass?: string | string[] | Set<string> | { [key: string]: any };
  placeholder?: string;
  required: boolean;
  valueProperty: string;
}

export function getDefaultSelect(overrides?: Partial<ISelect>): ISelect {
  return Object.assign(
    {
      appearance: null,
      id: null,
      label: null,
      name: null,
      nameProperty: null,
      options: [],
      placeholder: null,
      required: false,
      valueProperty: null,
    },
    overrides
  );
}
