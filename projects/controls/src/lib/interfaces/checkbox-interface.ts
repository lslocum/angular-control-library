import { ThemePalette } from '@angular/material/core';

import { Position } from './position';

export interface ICheckbox {
  color?: ThemePalette;
  disableRipple?: boolean;
  id: string;
  indeterminate?: boolean;
  label: string;
  labelPosition: Position;
  name: string;
  required: boolean;
}

export function getDefaultCheckbox(overrides?: Partial<ICheckbox>): ICheckbox {
  return Object.assign(
    {
      id: null,
      label: null,
      labelPosition: 'after',
      name: null,
      required: false,
    },
    overrides
  );
}
