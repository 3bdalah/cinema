import { Component, Input } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { SearchService } from '../search.service';
=======
import { WishListService } from 'src/app/watch-list/wish-list.service';
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: MoviesInterface;
<<<<<<< HEAD
  constructor(private moviesData: MoviesService, private router: Router, private search:SearchService) {}
  openDetailes(idMovie: number) {
    this.router.navigate(['movie', idMovie]);
    this.moviesData.getfullyDataMovie(idMovie);
    this.search.setSearchFlag(false)
=======
  constructor(
    private moviesData: MoviesService,
    private router: Router,
    private wishList: WishListService
  ) {}
  openDetailes(idMovie: number) {
    this.router.navigate(['movie', idMovie]);
    this.moviesData.getfullyDataMovie(idMovie);
  }
  handleAddMovieToWishList(movieData: MoviesInterface) {
    this.wishList.toggleMovieToWishList(movieData);
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