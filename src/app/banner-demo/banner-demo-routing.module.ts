import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerDemoComponent } from './banner-demo.component';

const routes: Routes = [{ path: '', component: BannerDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerDemoRoutingModule { }
