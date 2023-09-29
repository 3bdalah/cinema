import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_Key = 'fd1abe0fb535494df40c06c72320b913';
  private URLApi = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private MovieDetailesApi = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<any>(this.URLApi + this.api_Key);
  }

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

  getAllMoviesByPagination(pageNum: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_Key}&page=${pageNum}`
    );
  }
}
