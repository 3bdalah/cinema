import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiBaseUrl = 'https://api.themoviedb.org/3';
  private accountId = '19729259';
  private api_Key = 'fd1abe0fb535494df40c06c72320b913';
  private URLApi = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private MovieDetailesApi = 'https://api.themoviedb.org/3/movie/';
  private accountID = 19729259;
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

  getFavoriteMovies(page: number): Observable<any> {
    // Define the URL and headers
    const url = `${this.apiBaseUrl}/account/${this.accountId}/favorite/movies`;
    const headers = new HttpHeaders({
      Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDFhYmUwZmI1MzU0OTRkZjQwYzA2YzcyMzIwYjkxMyIsInN1YiI6IjY0NzUzM2IzOTI0Y2U2MDBiZmQzZGY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAr9zbvolHwyzr3hobp9zIxzyH-K7bnjp4TQInYosls`, // Replace with your access token
      Accept: 'application/json',
    });

    // Make the GET request
    return this.http.get(url, {
      headers: headers,
      params: {
        language: 'en-US',
        page: page.toString(),
        sort_by: 'created_at.asc',
      },
    });
  }
}
