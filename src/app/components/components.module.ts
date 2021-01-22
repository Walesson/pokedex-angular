import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PokemonCardComponent } from './molecules/pokemon-card/pokemon-card.component';
import { PaginationComponent } from './molecules/pagination/pagination.component';
import { PokemonDetailComponent } from './molecules/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonCardComponent, PaginationComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [PokemonCardComponent, PaginationComponent, PokemonDetailComponent]
})
export class ComponentsModule { }
