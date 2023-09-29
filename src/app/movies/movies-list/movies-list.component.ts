import { Component } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  listMovies: MoviesInterface[] = [];
  fullyDataMovies: any = [];
  pageNumbers: number[] = [];
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit() {
    this.pageNumbers = new Array(15).fill('').map((item, index) => index);
    this._MoviesService.getAllMoviesByPagination(1).subscribe((movies) => {

      this.listMovies = movies.results;
    });
  }

  handlePassNumPage(numPage: number) {
    this._MoviesService
      .getAllMoviesByPagination(numPage)
      .subscribe((movies) => {
        this.listMovies = movies.results;
      });
  }
}
