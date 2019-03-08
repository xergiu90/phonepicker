import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhonepickerComponent} from './phonepicker/phonepicker.component';

const appRoutes: Routes = [
  {
    path: 'phonepicker',
    component: PhonepickerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
