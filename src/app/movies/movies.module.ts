import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    SearchComponent,
    MovieDetailsComponent,
    DurationPipe
  ],

  imports: [CommonModule, AppRoutingModule, FormsModule, SharedModule],

  exports: [
    MoviesListComponent,
    MovieCardComponent,
    SearchComponent,
    MovieDetailsComponent,
  ],
})
export class MoviesModule {}
