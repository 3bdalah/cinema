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

  allMoviesWishList: MoviesInterface[] = [];
  addedMovie: boolean = false;
  removeMovie: boolean = false;

  constructor(
    private fullyDataMovie: MoviesService,

    private _ActivatRoute: ActivatedRoute,
    private _WishListService: WishListService
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

    this._WishListService.getAllMoviesAtWishList().subscribe((movies) => {
      this.allMoviesWishList = movies;
    });
  }
  handleAddMovieToWishList(movieData: MoviesInterface) {
    let checkFoundMovie = this.allMoviesWishList.find(
      (movie) => movie.id == movieData.id
    );
    if (checkFoundMovie) {
      this.removeMovie = true;
      setTimeout(() => {
        this.removeMovie = false;
      }, 1000);
    } else {
      this.addedMovie = true;
      setTimeout(() => {
        this.addedMovie = false;
      }, 1000);
    }

    this._WishListService.toggleMovieToWishList(movieData);
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
