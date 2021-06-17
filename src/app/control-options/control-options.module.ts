import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlOptionsComponent } from './control-options.component';
import { TextComponent } from './controls/text.component';
import { CheckboxComponent } from './controls/checkbox.component';
import { NumberComponent } from './controls/number.component';
import { AppearanceComponent } from './controls/appearance.component';
import { ColorComponent } from './controls/color.component';
import { DirectionComponent } from './controls/direction.component';
import { LabelPositionComponent } from './controls/label-position.component';



@NgModule({
  declarations: [
    ControlOptionsComponent,
    CheckboxComponent,
    TextComponent,
    NumberComponent,
    AppearanceComponent,
    ColorComponent,
    DirectionComponent,
    LabelPositionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlOptionsComponent
  ]
})
export class ControlOptionsModule { }
