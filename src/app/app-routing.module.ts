import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { WishListComponent } from './watch-list/wish-list/wish-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'watch-list', component: WishListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
