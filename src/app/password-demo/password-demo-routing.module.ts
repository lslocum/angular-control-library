import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordDemoComponent } from './password-demo.component';

const routes: Routes = [{ path: ':library', component: PasswordDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
