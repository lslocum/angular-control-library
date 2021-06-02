import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberDemoComponent } from './number-demo.component';

const routes: Routes = [{ path: '', component: NumberDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberDemoRoutingModule { }
