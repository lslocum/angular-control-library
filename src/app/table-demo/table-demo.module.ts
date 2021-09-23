import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDemoComponent } from './table-demo.component';
import { PrimeTableModule } from 'projects/primeng/src/lib/table/table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlOptionsModule } from '../control-options/control-options.module';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

const routes: Routes = [{ path: '', component: TableDemoComponent }];

@NgModule({
  declarations: [TableDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ControlOptionsModule,
    PrimeTableModule,
    ButtonModule,
    ProgressBarModule
  ],
  exports: [TableDemoComponent],
})
export class TableDemoModule {}
