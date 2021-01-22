import { Routes } from '@angular/router'
import { HomeComponent, DetailsComponent } from '../app/pages'

export const AppRoute: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'pokemon/detalhe',
    component: DetailsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
]
