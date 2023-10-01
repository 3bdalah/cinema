import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MoviesInterface } from '../movies/movies-interface';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private wishListMovies: MoviesInterface[] = [];
  private wishListMoviesSubject = new BehaviorSubject<MoviesInterface[]>([]);
  private lengthListMoviesSubject = new BehaviorSubject<number>(0);
  private lengthList: number = 0;
  constructor() {}

  toggleMovieToWishList(movieData: MoviesInterface) {
    const index = this.wishListMovies.findIndex(
      (movie) => movie.id === movieData.id
    );

    if (index !== -1) {
      // Movie is already in the wishlist, remove it
      this.wishListMovies.splice(index, 1);
    } else {
      // Movie is not in the wishlist, add it
      this.wishListMovies.push(movieData);
      this.getLengthMoviesAtWishList();
    }

    this.wishListMoviesSubject.next([...this.wishListMovies]);
    this.lengthListMoviesSubject.next(this.wishListMovies.length);
    this.getAllMoviesAtWishList();
    this.getLengthMoviesAtWishList();
  }

  getAllMoviesAtWishList() {
    return this.wishListMoviesSubject.asObservable();
  }

  getLengthMoviesAtWishList() {
    return this.lengthListMoviesSubject.asObservable();
  }
}
