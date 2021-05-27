import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'textbox',
    loadChildren: () =>
      import('./textbox-demo/textbox-demo.module').then(
        (m) => m.TextboxDemoModule
      ),
  },
  { path: 'button', loadChildren: () => import('./button-demo/button-demo.module').then(m => m.ButtonDemoModule) },
  { path: 'phone', loadChildren: () => import('./phone-demo/phone-demo.module').then(m => m.PhoneDemoModule) },
  { path: 'email', loadChildren: () => import('./email-demo/email-demo.module').then(m => m.EmailDemoModule) },
  { path: 'textarea', loadChildren: () => import('./textarea-demo/textarea-demo.module').then(m => m.TextareaDemoModule) },
  { path: 'checkbox', loadChildren: () => import('./checkbox-demo/checkbox-demo.module').then(m => m.CheckboxDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
