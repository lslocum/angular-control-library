import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDemoComponent } from './phone-demo.component';

const routes: Routes = [{ path: ':library', component: PhoneDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneDemoRoutingModule { }
