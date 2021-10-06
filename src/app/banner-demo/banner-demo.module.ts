import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerDemoRoutingModule } from './banner-demo-routing.module';
import { BannerDemoComponent } from './banner-demo.component';
import { Routes, RouterModule } from '@angular/router';
import { BannerModule } from 'projects/primeng/src/public-api';

const routes: Routes = [{ path: '', component: BannerDemoComponent }];

@NgModule({
  declarations: [
    BannerDemoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    BannerModule,
    BannerDemoRoutingModule,
  ]
})
export class BannerDemoModule { }
