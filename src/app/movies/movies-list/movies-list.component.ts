import { Component } from '@angular/core';
import { MoviesInterface } from '../movies-interface';
import { MoviesService } from '../movies.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  listMovies: MoviesInterface[] = [];
  fullyDataMovies: any = [];
  pageNumbers: number[] = [];
  searchFlag!: boolean;
  myresult!: any;
  receivedData1: any = [];

  constructor(private _MoviesService: MoviesService, private results: SearchService) {
    console.log('receivedData1', this.receivedData1);
  }

  ngOnInit() {
    this.pageNumbers = new Array(15).fill('').map((item, index) => index);
    this.results.setSearchFlag(false); // Set searchFlag to false initially
    this.loadMovies(); // Load movies based on pagination

    this._MoviesService.getAllMoviesByPagination(1).subscribe((movies) => {

      this.listMovies = movies.results;
    });


    this.results.getSearchFlag().subscribe((flag) => {
      this.searchFlag = flag;
      console.log('searchFlag onInit: ', this.searchFlag);
      if (this.searchFlag) {
        this.loadMovies(); // Reload movies if searchFlag is true
      }
    });
  }

  ngAfterViewInit() {
    this.results.getStoredSearchResults().subscribe((movie) => {
      this.myresult = movie;
      this.myresult = this.myresult.results;

      console.log('searchFlag AfterViewInit: ', this.searchFlag);
      console.log('getStoredSearchResults in Parent: ', this.myresult);
      if (!this.searchFlag) {
        this.loadMovies(); // Reload movies if searchFlag is false
      }
    });
  }

  // Function to load movies based on pagination
  loadMovies() {
    this._MoviesService.getAllMovies().subscribe((movie) => {
      console.log('movie', movie.results);
      let moviesTemp = movie;
      this.listMovies = moviesTemp.results;
    });
  }
  
  // Function to handle page number changes
  handlePassNumPage(numPage: number) {
    this.results.setSearchFlag(false); // Set searchFlag to false when changing pages
    this._MoviesService.getAllMoviesByPagination(numPage).subscribe((movies) => {
      this.listMovies = movies.results;
    });
  }
}
