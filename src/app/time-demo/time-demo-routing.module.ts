import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeDemoComponent } from './time-demo.component';

const routes: Routes = [{ path: ':library', component: TimeDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeDemoRoutingModule { }
