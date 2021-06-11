import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface IDate {
  appearance?: MatFormFieldAppearance;
  color?: ThemePalette;
  dateFormat: string;
  /** Use to turn off certain days. For example to disable weekend dates use [0,6] */
  disabledDays?: number[];
  id: string;
  invalidDates?: Date[];
  label: string;
  maxDate?: Date;
  minDate?: Date;
  name: string;
  placeholder?: string;
  required: boolean;
}

export function getDefaultDate(overrides?: Partial<IDate>): IDate {
  return Object.assign(
    {
      id: null,
      dateFormat: 'mm/dd/yy',
      label: null,
      name: null,
      required: false,
    },
    overrides
  );
}
