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
  allMoviesWishList: MoviesInterface[] = [];
  addedMovie: boolean = false;
  removeMovie: boolean = false;
  constructor(
    private moviesData: MoviesService,
    private router: Router,
    private wishList: WishListService,
    private search: SearchService
  ) {}

  ngOnInit() {
    this.wishList.getAllMoviesAtWishList().subscribe((movies) => {
      this.allMoviesWishList = movies;
    });
  }

  openDetailes(idMovie: number) {
    this.router.navigate(['movie', idMovie]);
    this.moviesData.getfullyDataMovie(idMovie);
    this.search.setSearchFlag(false);
  }
  handleAddMovieToWishList(movieData: MoviesInterface) {
    // this.loadNotfy = true;
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
    this.wishList.toggleMovieToWishList(movieData);
  }
}
