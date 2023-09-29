import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_Key = 'fd1abe0fb535494df40c06c72320b913';
<<<<<<< HEAD
  private URLApi = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private MovieDetailesApi = 'https://api.themoviedb.org/3/movie/';
  // "https://api.themoviedb.org/3/movie/565770/recommendations?api_key=fd1abe0fb535494df40c06c72320b913"
  // private recommendationsMovie = '565770/recommendations?api_key=fd1abe0fb535494df40c06c72320b913'
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<any>(this.URLApi + this.api_Key);
  }
=======
  private MovieDetailesApi = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) {}
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4

  getfullyDataMovie(movieID: number) {
    return this.http.get<any>(
      this.MovieDetailesApi + movieID + '?api_key=' + this.api_Key
    );
  }
  getAllRecommendationMovies(movieID: number) {
    return this.http.get<any>(
      this.MovieDetailesApi +
        movieID +
        '/recommendations?api_key=' +
        this.api_Key
    );
  }
<<<<<<< HEAD
=======
  getAllMoviesByPagination(pageNum: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_Key}&page=${pageNum}`
    );
  }
>>>>>>> 0d7918b71be96c3e507d88e781d9f41aebfa2bb4
}
