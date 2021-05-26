import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextboxDemoComponent } from './textbox-demo.component';

const routes: Routes = [{ path: '', component: TextboxDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextboxDemoRoutingModule { }
