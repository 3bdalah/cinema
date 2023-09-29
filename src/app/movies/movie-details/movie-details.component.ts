import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesInterface } from '../movies-interface';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute, Router } from '@angular/router';
import { WishListService } from 'src/app/watch-list/wish-list.service';
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4

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
<<<<<<< HEAD
    private _ActivatRoute: ActivatedRoute
=======
    private _ActivatRoute: ActivatedRoute,
    private _WishListService: WishListService,
    private router: Router
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
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
<<<<<<< HEAD


    
=======
  }
  handleAddMovieToWishList(movieData: MoviesInterface) {
    this._WishListService.toggleMovieToWishList(movieData);
    this.router.navigate(['watch-list']);
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
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
