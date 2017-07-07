import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: '',
      component: MainComponent
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
