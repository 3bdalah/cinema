import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesInterface } from '../movies-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { WishListService } from 'src/app/watch-list/wish-list.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieAllDetailes!: any;
  moveiId!: number;
  moviesRecommendation!: MoviesInterface[];
  constructor(
    private fullyDataMovie: MoviesService,
    private _ActivatRoute: ActivatedRoute,
    private _WishListService: WishListService,
    private router: Router
  ) {}
  ngOnInit() {
    this._ActivatRoute.params.subscribe((params) => {
      this.moveiId = params['id'];
      this.fullyDataMovie
        .getfullyDataMovie(this.moveiId)
        .subscribe((dataMovie) => {
          this.movieAllDetailes = dataMovie;
        });
      this.fullyDataMovie
        .getAllRecommendationMovies(this.moveiId)
        .subscribe((moviesRec) => {
          console.log('movieRes', moviesRec.results);
          this.moviesRecommendation = moviesRec.results;
        });
    });
  }
  handleAddMovieToWishList(movieData: MoviesInterface) {
    this._WishListService.toggleMovieToWishList(movieData);
    this.router.navigate(['watch-list']);
  }
}

/**
 *  private router: Router,
 *  private wishList: WishListService
 *  handleAddMovieToWishList(movieData: MoviesInterface) {
    this.wishList.toggleMovieToWishList(movieData);
    this.router.navigate(['watch-list']);
  }
 */
