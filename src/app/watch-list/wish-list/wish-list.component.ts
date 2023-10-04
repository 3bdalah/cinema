import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesInterface } from 'src/app/movies/movies-interface';
import { WishListService } from 'src/app/watch-list/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  moviesListContainer!: MoviesInterface[];
  addedMovie: boolean = false;
  removeMovie: boolean = false;

  constructor(
    private _WishListService: WishListService,
    private _route: Router
  ) {}
  ngOnInit() {
    this._WishListService.getAllMoviesAtWishList().subscribe((movie) => {
      console.log('all movies at wish list at ng on init', movie);
      this.moviesListContainer = movie;
    });
  }
  toggleMovieToWishListFromComp(movieData: MoviesInterface) {
    this.removeMovie = true;
    setTimeout(() => {
      this.removeMovie = false;
    }, 1000);

    this._WishListService.toggleMovieToWishList(movieData);
  }
  handleBackToHome() {
    this._route.navigate(['/']);
  }
}
