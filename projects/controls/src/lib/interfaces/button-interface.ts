import { Position } from './position';

export type ButtonColor = 'primary' | 'accent' | 'warn';
export type ButtonDisplay = 'filled' | 'outlined' | 'inverted';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonTypes = 'text' | 'icon' | 'textWithIcon' | 'link';

export interface IButton {
  badgeCount?: number;
  badgeClass?: string;
  classes?: string[];
  color?: ButtonColor;
  display: ButtonDisplay;
  hasShadow?: boolean;
  icon?: string;
  iconPosition?: Position;
  isRounded?: boolean;
  label?: string;
  loading?: boolean;
  size?: ButtonSize;
  type?: ButtonTypes;
}

export function getDefaultButton(overrides?: Partial<IButton>): IButton {
  return Object.assign(
    {
      display: 'filled',
      hasShadow: false,
    },
    overrides
  );
}
