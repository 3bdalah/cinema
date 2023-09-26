import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    SearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
