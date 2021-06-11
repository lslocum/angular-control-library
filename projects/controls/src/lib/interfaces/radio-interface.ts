import { ThemePalette } from '@angular/material/core';

import { Direction } from './direction';
import { Position } from './position';

export interface IRadio {
  color?: ThemePalette;
  direction?: Direction;
  id: string;
  label: string;
  labelPosition?: Position;
  name: string;
  nameProperty: string;
  options: any[];
  required: boolean;
  valueProperty: string;
}

export function getDefaultRadio(overrides?: Partial<IRadio>): IRadio {
  return Object.assign(
    {
        color: 'primary',
        direction: 'vertical',
        id: null,
        label:null,
        labelPosition: 'after',
        name: null,
        nameProperty: null,
        options:[],
        required: false,
        valueProperty: null,
    },
    overrides
  );
}
