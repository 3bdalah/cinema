import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from '../app-routing.module';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    SearchComponent,
    MovieDetailsComponent,
  ],
<<<<<<< HEAD
  imports: [CommonModule, AppRoutingModule,FormsModule],
=======
  imports: [CommonModule, AppRoutingModule],
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
  exports: [
    MoviesListComponent,
    MovieCardComponent,
    SearchComponent,
    MovieDetailsComponent,
  ],
})
export class MoviesModule {}
