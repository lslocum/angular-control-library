import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDemoComponent } from './email-demo.component';

const routes: Routes = [{ path: '', component: EmailDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailDemoRoutingModule { }
