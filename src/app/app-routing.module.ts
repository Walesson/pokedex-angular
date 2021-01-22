import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoute } from '../routes';

@NgModule({
  imports: [RouterModule.forRoot(AppRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
