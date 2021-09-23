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
  {
    path: 'button',
    loadChildren: () =>
      import('./button-demo/button-demo.module').then(
        (m) => m.ButtonDemoModule
      ),
  },
  {
    path: 'phone',
    loadChildren: () =>
      import('./phone-demo/phone-demo.module').then((m) => m.PhoneDemoModule),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./email-demo/email-demo.module').then((m) => m.EmailDemoModule),
  },
  {
    path: 'textarea',
    loadChildren: () =>
      import('./textarea-demo/textarea-demo.module').then(
        (m) => m.TextareaDemoModule
      ),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./checkbox-demo/checkbox-demo.module').then(
        (m) => m.CheckboxDemoModule
      ),
  },
  {
    path: 'date',
    loadChildren: () =>
      import('./date-demo/date-demo.module').then((m) => m.DateDemoModule),
  },
  {
    path: 'number',
    loadChildren: () =>
      import('./number-demo/number-demo.module').then(
        (m) => m.NumberDemoModule
      ),
  },
  {
    path: 'radio',
    loadChildren: () =>
      import('./radio-demo/radio-demo.module').then((m) => m.RadioDemoModule),
  },
  {
    path: 'select',
    loadChildren: () =>
      import('./select-demo/select-demo.module').then(
        (m) => m.SelectDemoModule
      ),
  },
  {
    path: 'time',
    loadChildren: () =>
      import('./time-demo/time-demo.module').then((m) => m.TimeDemoModule),
  },
  {
    path: 'password',
    loadChildren: () =>
      import('./password-demo/password-demo.module').then((m) => m.PasswordDemoModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table-demo/table-demo.module').then((m) => m.TableDemoModule),
  },
  {
    path: '**',
    redirectTo: 'button',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
