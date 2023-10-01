import { Component } from '@angular/core';
import { MoviesInterface } from 'src/app/movies/movies-interface';
import { WishListService } from 'src/app/watch-list/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  moviesListContainer!: MoviesInterface[];

  constructor(private _WishListService: WishListService) {}
  ngOnInit() {
    this._WishListService.getAllMoviesAtWishList().subscribe((movie) => {
      console.log('all movies at wish list at ng on init', movie);
      this.moviesListContainer = movie;
    });
  }
  toggleMovieToWishListFromComp(movieData: MoviesInterface) {
    this._WishListService.toggleMovieToWishList(movieData);
  }
}
