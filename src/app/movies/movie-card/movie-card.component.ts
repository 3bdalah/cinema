import { Component, Input } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

import { SearchService } from '../search.service';

import { WishListService } from 'src/app/watch-list/wish-list.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: MoviesInterface;

  constructor(
    private moviesData: MoviesService,
    private router: Router,
    private wishList: WishListService,
    private search: SearchService
  ) {}

  openDetailes(idMovie: number) {
    this.router.navigate(['movie', idMovie]);
    this.moviesData.getfullyDataMovie(idMovie);
    this.search.setSearchFlag(false);
  }
  handleAddMovieToWishList(movieData: MoviesInterface) {
    this.wishList.toggleMovieToWishList(movieData);
  }
}
