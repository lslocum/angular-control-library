import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioDemoComponent } from './radio-demo.component';

const routes: Routes = [{ path: ':library', component: RadioDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioDemoRoutingModule { }
